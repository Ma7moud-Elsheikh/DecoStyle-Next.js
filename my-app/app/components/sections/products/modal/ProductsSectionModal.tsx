'use client';

import { Dialog } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import ProductCartButton from '@/app/components/ui/productsPage/ProductCartButton';
import ZoomImage from '@/app/components/ui/image effect/ZoomImage';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';

type ProductType = {
    id: string;
    slug: string;
    image: string;
    name: string;
    description?: string;
    price?: number;
    rating?: number;
};

const ProductModal = ({ product, onClose }: { product: ProductType | null; onClose: () => void }) => {
    if (!product) return null;

    return (
        <Dialog open={!!product} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" aria-hidden="true" />

            <Dialog.Panel className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200 z-20">
                    <FiX size={24} />
                </button>

                {/* Left: Zoom Image */}
                <div className="relative h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg bg-gray-100 shadow-md">
                    <ZoomImage src={product.image} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
                </div>

                {/* Right: Details */}
                <div className="flex flex-col justify-center gap-5 p-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[Inter, sans-serif]">{product.name}</h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{product.description}</p>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl md:text-3xl font-semibold text-[var(--main-color)]">${product.price?.toFixed(2) ?? '0.00'}</span>
                        <span className="flex items-center gap-1 text-yellow-500">
                            <FaStar /> {product.rating ?? 0}
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <ProductCartButton
                            product={{
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                slug: product.slug,
                                image: product.image
                            }}
                        />
                        <LinkToProductButton slug={product.slug} />
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

function LinkToProductButton({ slug }: { slug: string }) {
    return (
        <Link href={`/products/${slug}`} className="inline-block w-full px-6 py-3 text-center text-sm font-medium text-[var(--third-color)] border border-[var(--third-color)] rounded-lg hover:bg-[var(--main-color)] hover:text-white hover:border-[var(--main-color)] transition-colors duration-200">
            Open Product Page
        </Link>
    );
}

export default ProductModal;
