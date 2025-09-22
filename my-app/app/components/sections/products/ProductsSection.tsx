'use client';

import axios from 'axios';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import CustomContainer from '../../common/CustomContainer';
import ProductModal from './modal/ProductsSectionModal';
import ProductsSectionSkeleton from './skelton/ProductsSectionSkeleton';

type ProductType = {
    id: string;
    slug: string;
    image: string;
    name: string;
    description: string;
    price: number;
    rating: number;
};

const letters = ['O', 'u', 'r', 'P', 'r', 'o', 'd', 'u', 'c', 't', 's'];
const orangeIndexes = new Set([0, 1, 2]);

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const ProductsSection: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/products', {
                    params: {
                        populate: '*',
                        'pagination[page]': 1,
                        'pagination[pageSize]': 4
                    }
                });

                const productsData: ProductType[] = (res.data?.data || []).map((item: any) => {
                    const root = item.attributes ? item.attributes : item;
                    const img =
                        root.product_img?.[0]?.url ??
                        root.product_img?.data?.[0]?.attributes?.url ??
                        '/image/placeholder.png';

                    return {
                        id: String(item.id ?? root.id ?? ''),
                        slug: root.slug ?? '',
                        name: root.name ?? '',
                        description: root.description ?? '',
                        price: root.price ?? 0,
                        rating: root.rating ?? 0,
                        image: img.startsWith('http') ? img : `http://localhost:1337${img}`
                    };
                });

                setProducts(productsData);
                setIsLoading(false);
            } catch (error) {
                setProducts([]);
                setIsLoading(true);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section id="products" className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
            <CustomContainer>
                {/* Title */}
                <div className="text-center mb-12">
                    <motion.h2
                        aria-label="Our Products"
                        className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-extrabold leading-none flex flex-wrap justify-center gap-x-1"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                    >
                        {letters.map((ch, idx) => (
                            <motion.span
                                key={idx}
                                className={`inline-block ${
                                    orangeIndexes.has(idx) ? 'text-[#ff8819]' : 'text-black'
                                } ${idx === 3 ? 'ml-4' : ''}`}
                                variants={letterVariants}
                            >
                                {ch}
                            </motion.span>
                        ))}
                    </motion.h2>
                </div>

                {/* Grid */}
                {isLoading ? (
                    <ProductsSectionSkeleton />
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {products[0] && (
                            <div className="col-span-1 relative group overflow-hidden cursor-pointer mb-6">
                                <Link href={`/products/${products[0].slug}`}>
                                    <Image
                                        src={products[0].image}
                                        alt={products[0].name}
                                        width={800}
                                        height={600}
                                        className="w-full h-[40rem] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </Link>
                                {/* Search icon */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full group-hover:translate-y-1/2 transition-transform duration-500 ease-in-out">
                                        <button
                                            onClick={() => setSelectedProduct(products[0])}
                                            className="pointer-events-auto bg-[#ff8819] text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-[var(--third-color)] transition-transform duration-500 ease-in-out focus:outline-none"
                                        >
                                            <FiSearch size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-span-1 flex flex-col">
                            {products.slice(1, 3).map((prod) => (
                                <div
                                    key={prod.id}
                                    className="relative group overflow-hidden cursor-pointer mb-6"
                                >
                                    <Link href={`/products/${prod.slug}`}>
                                        <Image
                                            src={prod.image}
                                            alt={prod.name}
                                            width={800}
                                            height={600}
                                            className="w-full h-[calc(20rem-0.75rem)] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </Link>
                                    {/* Search icon */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full group-hover:translate-y-1/2 transition-transform duration-500 ease-in-out">
                                            <button
                                                onClick={() => setSelectedProduct(prod)}
                                                className="pointer-events-auto bg-[#ff8819] text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-[var(--third-color)] transition-transform duration-500 ease-in-out focus:outline-none"
                                            >
                                                <FiSearch size={22} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {products[3] && (
                            <div className="col-span-1 relative group overflow-hidden cursor-pointer mb-6">
                                <Link href={`/products/${products[3].slug}`}>
                                    <Image
                                        src={products[3].image}
                                        alt={products[3].name}
                                        width={800}
                                        height={600}
                                        className="w-full h-[40rem] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </Link>
                                {/* Search icon */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full group-hover:translate-y-1/2 transition-transform duration-500 ease-in-out">
                                        <button
                                            onClick={() => setSelectedProduct(products[3])}
                                            className="pointer-events-auto bg-[#ff8819] text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-[var(--third-color)] transition-transform duration-500 ease-in-out focus:outline-none"
                                        >
                                            <FiSearch size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </CustomContainer>

            {/* Modal */}
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </section>
    );
};

export default ProductsSection;
