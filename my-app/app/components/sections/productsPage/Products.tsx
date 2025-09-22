'use client';

import axios from 'axios';
import 'glightbox/dist/css/glightbox.min.css';
import type { ReactNode } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import CustomContainer from '../../common/CustomContainer';
import ProductPageCards, { ProductCard } from '../../ui/productsPage/ProductPageCards';
import ProductCardSkeleton from '../../ui/productsPage/skilton/ProductCardSkeleton';

// categories
const DEFAULT_CATEGORIES = ['all', 'design', 'anime', 'nature', 'animal'] as const;
export type Category = (typeof DEFAULT_CATEGORIES)[number];

interface Props {
    items?: ProductCard[];
    categories?: Category[];
    enableLightbox?: boolean;
    children?: ReactNode;
    className?: string;
}

const ProductsPage: React.FC<Props> = ({
    items,
    categories = DEFAULT_CATEGORIES as unknown as Category[],
    enableLightbox = true,
    children,
    className = ''
}) => {
    const [active, setActive] = useState<Category>('all');
    const gridRef = useRef<HTMLDivElement | null>(null);
    const isoRef = useRef<any>(null);
    const lightboxRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductCard[]>([]);
    const [categoriesData, setCategoriesData] = useState<Category[]>(['all']);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 7;

    // ----- Isotope -----
    useEffect(() => {
        if (!gridRef.current) return;

        let iso: any;
        (async () => {
            const Isotope = (await import('isotope-layout')).default;
            iso = new Isotope(gridRef.current as Element, {
                itemSelector: '.isotope-item',
                percentPosition: true,
                masonry: { columnWidth: '.grid-sizer' }
            });
            isoRef.current = iso;
        })();

        return () => {
            try {
                iso?.destroy();
            } catch {}
        };
    }, []);

    // ----- imagesLoaded -----
    useEffect(() => {
        if (!gridRef.current || !isoRef.current) return;

        const imagesLoaded = require('imagesloaded');
        imagesLoaded(gridRef.current, () => {
            isoRef.current.reloadItems();
            isoRef.current.arrange();
            isoRef.current.layout();
        });
    }, [products]);

    // ----- arrange on filter change -----
    useEffect(() => {
        const iso = isoRef.current;
        if (!iso) return;

        if (active === 'all') {
            iso.arrange({ filter: '*' });
        } else {
            iso.arrange({
                filter: (elem: Element) => elem.getAttribute('data-category') === active
            });
        }
    }, [active]);

    // ----- GLightbox -----
    useEffect(() => {
        if (!enableLightbox || products.length === 0) return;

        let lightbox: any;
        (async () => {
            const GLightbox = (await import('glightbox')).default;
            if (lightboxRef.current) {
                lightboxRef.current.destroy();
            }
            lightbox = GLightbox({
                selector: '.glightbox',
                touchNavigation: true,
                loop: true,
                openEffect: 'zoom',
                closeEffect: 'fade',
                slideEffect: 'slide',
                closeOnOutsideClick: true
            });
            lightboxRef.current = lightbox;
        })();

        return () => {
            try {
                lightbox?.destroy();
            } catch {}
        };
    }, [enableLightbox, products]);

    // Get Products
    useEffect(() => {
        setIsLoading(true);

        const getPageData = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/products', {
                    params: {
                        populate: '*',
                        // filters: {
                        //     price: {
                        //         $gt: 100
                        //     }
                        // }

                        pagination: { page: currentPage, pageSize: pageSize }
                        // pagination: { start: 1, limit: 5 }

                        // sort: {
                        //     price: 'asc'
                        // }

                        // fields: 'price,name'
                    }
                });
                // console.log(res.data.data);

                const totalItems = res.data.meta.pagination.total;
                const totalPages = Math.ceil(totalItems / pageSize);
                setPageNumber(totalPages);
                // console.log('Total Pages:', totalPages);

                const productsData: ProductCard[] = res.data.data.map((item: any) => ({
                    id: item.id.toString(),
                    title: item.name,
                    slug: item.slug,
                    image: item.product_img?.[0]?.url
                        ? `http://localhost:1337${item.product_img[0].url}`
                        : '/image/placeholder.png',
                    category: item.category,
                    description: item.description,
                    price: item.price,
                    rating: item.rating
                }));

                setProducts(productsData);

                // console.log(res.data.data);
                const uniqueCategories = [
                    'all',
                    ...new Set(res.data.data.map((item: any) => item.category))
                ];
                // console.log(uniqueCategories);
                setCategoriesData(uniqueCategories as Category[]);
            } catch (error) {
                setIsLoading(true);
            } finally {
                setIsLoading(false);
            }
        };

        getPageData();
    }, [currentPage]);

    // arrange on filter change
    useEffect(() => {
        const iso = isoRef.current;
        if (!iso) return;

        if (active === 'all') {
            iso.arrange({ filter: '*' });
        } else {
            iso.arrange({
                filter: (elem: Element) => elem.getAttribute('data-category') === active
            });
        }
    }, [active]);

    useEffect(() => {
        const iso = isoRef.current;
        if (!iso || !gridRef.current) return;

        const imagesLoaded = require('imagesloaded');
        imagesLoaded(gridRef.current, () => {
            iso.reloadItems();
            iso.arrange();
            iso.layout();
        });
    }, [products]);

    return (
        <section
            className={`py-12 md:py-16 lg:py-20 ${className}`}
            style={{ backgroundColor: 'var(--bg-color)' }}
        >
            <CustomContainer>
                {/* heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span style={{ color: 'var(--main-color)' }}>Our</span>{' '}
                        <span style={{ color: 'var(--heading-color)' }}>Products</span>
                    </h2>
                </div>

                {/* filters */}
                <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                    {categoriesData.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-2 cursor-pointer rounded-full border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] ${
                                active === cat
                                    ? 'bg-[var(--main-color)] text-white border-[var(--main-color)] shadow'
                                    : 'bg-white text-[var(--heading-color)] border-[var(--heading-color)]/30 hover:border-[var(--heading-color)]'
                            }`}
                            aria-pressed={active === cat}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* gallery */}
                <div ref={gridRef} className="isotope-grid relative gap-6">
                    <div className="grid-sizer w-full sm:w-1/2 md:w-1/3 lg:w-1/4"></div>

                    {isLoading ? (
                        <ProductCardSkeleton count={1} />
                    ) : (
                        <ProductPageCards items={products} />
                    )}
                    {children}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                    <button
                        className={`px-4 py-2 rounded-full transition-colors cursor-pointer ${
                            currentPage === 1
                                ? 'bg-[var(--main-color)]/30 text-white !cursor-not-allowed'
                                : 'bg-[var(--main-color)] text-white hover:bg-[var(--third-color)]'
                        }`}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {Array.from({ length: pageNumber }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded-full cursor-pointer ${
                                currentPage === i + 1
                                    ? 'bg-[var(--third-color)] text-white'
                                    : 'text-[var(--third-color)]'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className={`px-4 py-2 rounded-full transition-colors cursor-pointer ${
                            currentPage === pageNumber
                                ? 'bg-[var(--main-color)]/30 text-white !cursor-not-allowed'
                                : 'bg-[var(--main-color)] text-white hover:bg-[var(--third-color)]'
                        }`}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === pageNumber}
                    >
                        Next
                    </button>
                </div>
            </CustomContainer>
        </section>
    );
};

export default ProductsPage;
