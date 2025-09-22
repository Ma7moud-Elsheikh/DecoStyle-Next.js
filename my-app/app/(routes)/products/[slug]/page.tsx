
import React from 'react';
import Link from 'next/link';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import RelatedProducts from '@/app/components/ui/productsPage/RelatedProducts';
import ProductCartButton from '@/app/components/ui/productsPage/ProductCartButton';
import ZoomImage from '@/app/components/ui/image effect/ZoomImage';

type Props = {
    params: Promise<{ slug: string }>;
};

// Get single product by slug
const getProduct = async (slug: string) => {
    const res = await fetch(`http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch product');
    const data = await res.json();
    return data.data?.[0] || null;
};

// Get related products
const getRelatedProducts = async (category: string, excludeSlug: string) => {
    const res = await fetch(`http://localhost:1337/api/products?filters[category][$eq]=${category}&filters[slug][$ne]=${excludeSlug}&populate=*`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch related products');
    const data = await res.json();
    return data.data || [];
};

const SingleProductPage = async (props: Props) => {
    const { slug } = await props.params;

    const product = await getProduct(slug);
    if (!product) {
        return <div className="p-10 text-center text-red-500">Product not found</div>;
    }

    const { name, description, price, product_img, category, slug: productSlug, id } = product;
    const relatedProducts = await getRelatedProducts(category, productSlug);

    return (
        <>
            <BreadCrumb />
            <div className="px-6 py-10 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
                    {/* Sidebar - Related Products */}
                    <aside className="lg:col-span-4 space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">Related Products</h2>
                        <RelatedProducts
                            category={category}
                            products={relatedProducts.map((item: any) => ({
                                slug: item.slug,
                                name: item.name
                            }))}
                        />
                    </aside>

                    {/* Main Product Section */}
                    <section className="lg:col-span-8 space-y-6 flex flex-col items-center">
                        {/* Product Image with Zoom Hover */}
                        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg group bg-white">
                            <Link href={`/products/${productSlug}`} className="block w-full h-full">
                                <ZoomImage src={product_img?.[0]?.url ? `http://localhost:1337${product_img[0].url}` : '/image/placeholder.png'} />
                            </Link>
                        </div>

                        {/* Product Info */}
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
                            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
                            <span className="text-3xl font-bold text-[var(--main-color)]">${price}</span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mt-6">
                            <ProductCartButton
                                product={{
                                    id,
                                    name,
                                    price,
                                    slug: productSlug,
                                    image: product_img?.[0]?.url ? `http://localhost:1337${product_img[0].url}` : '/image/placeholder.png'
                                }}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;
