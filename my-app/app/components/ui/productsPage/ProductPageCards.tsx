'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart, FaEye, FaStar, FaHeart } from 'react-icons/fa6';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/app/components/ui/productsPage/dialog';
import { Button } from '@/app/components/ui/productsPage/button';
import toast from 'react-hot-toast';
import ProductCartButton from './ProductCartButton';

export type ProductCard = {
    id: string;
    title?: string;
    image: string;
    slug: string;
    category: string;
    description?: string;
    price?: string;
    rating?: string;
};

interface Props {
    items: ProductCard[];
}

const ProductPageCards: React.FC<Props> = ({ items }) => {
    const LOCAL_KEY = 'wishlist';
    const [selected, setSelected] = useState<ProductCard | null>(null);

    // Lazy initialization + objects
    const [wishlist, setWishlist] = useState<ProductCard[]>(() => {
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem(LOCAL_KEY);
                return saved ? JSON.parse(saved) : [];
            } catch {
                return [];
            }
        }
        return [];
    });

    // sync tabs with storage event
    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
            if (e.key !== LOCAL_KEY) return;
            try {
                setWishlist(e.newValue ? JSON.parse(e.newValue) : []);
            } catch {
                setWishlist([]);
            }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    // update localStorage when wishlist changes
    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(wishlist));
    }, [wishlist]);

    // toggle with prev state
    const toggleWishlist = (product: ProductCard) => {
        let message = '';

        setWishlist((prev) => {
            const exists = prev.some((p) => p.id === product.id);
            if (exists) {
                message = `${product.title} removed from wishlist`;
                return prev.filter((p) => p.id !== product.id);
            } else {
                message = `${product.title} added to wishlist`;
                return [...prev, product];
            }
        });

        if (message) {
            toast.success(message, { position: 'top-center' });
        }
    };

    const isInWishlist = (id: string) => wishlist.some((p) => p.id === id);

    return (
        <>
            {items.map((it) => (
                <div key={it.id} className="isotope-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 p-3" data-category={it.category}>
                    <div className="tab-content-box relative overflow-hidden rounded-xl bg-white shadow group min-h-[30rem]">
                        {/* preview button */}
                        <button
                            onClick={() => setSelected(it)}
                            className="absolute cursor-pointer right-2 z-20 flex h-10 w-10 items-center justify-center
                            rounded-full bg-[var(--main-color)] text-white
                            lg:opacity-0 lg:top-2 lg:group-hover:!opacity-100 lg:group-hover:top-1/2 lg:group-hover:-translate-y-[30px]
                            opacity-100 top-1/2 -translate-y-[30px]
                            transition-all duration-500 ease-in-out
                            hover:bg-[var(--third-color)]"
                        >
                            <FaEye />
                        </button>

                        {/* wishlist button */}
                        <button
                            onClick={() => toggleWishlist(it)}
                            type="button"
                            className="heart cursor-pointer absolute right-2 z-20 flex h-10 w-10 items-center justify-center
                            rounded-full bg-[var(--main-color)] text-white
                            lg:opacity-0 lg:top-2 lg:group-hover:!opacity-100 lg:group-hover:top-1/2 lg:group-hover:translate-y-[30px] lg:group-hover:transition-delay-1000
                            opacity-100 top-1/2 translate-y-[30px]
                            transition-all duration-500 ease-in-out
                            hover:bg-[var(--third-color)]"
                        >
                            {isInWishlist(it.id) ? <FaHeart className="text-black" /> : <FaRegHeart />}
                        </button>

                        {/* product image */}
                        <Link href={`/products/${it.slug}`}>
                            <Image src={it.image} alt={it.title || 'item'} width={800} height={600} className="w-full min-h-[30rem] object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
                        </Link>

                        {/* product info */}
                        <div
                            className="image-det absolute bottom-0 left-0 w-full bg-[var(--bg-color)] p-4 text-center transition-all duration-700
                            lg:left-[-100%] lg:group-hover:left-0 z-10"
                        >
                            <h2 className="text-lg font-bold text-white">
                                <Link href={`/products/${it.slug}`} className="transition-colors duration-500 text-[var(--third-color)] hover:text-[var(--main-color)] text-2xl">
                                    {it.title}
                                </Link>
                            </h2>
                            <p className="mt-1 text-sm text-[var(--text-color)]">{it.category}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* product modal */}
            <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
                <DialogContent className="sm:max-w-lg z-[99999] overflow-y-auto h-[97vh]">
                    {selected && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">{selected.title}</DialogTitle>
                                <DialogDescription className="text-gray-500">{selected.category}</DialogDescription>
                            </DialogHeader>

                            <div className="flex-1 flex flex-col items-center px-4 w-full">
                                <Link href={`/products/${selected.slug}`}>
                                    <Image src={selected.image} alt={selected.title || 'product'} width={600} height={490} className="h-[490px] w-full object-cover rounded-lg" />
                                </Link>

                                <div className="w-full mt-4 flex justify-between items-center text-gray-700">
                                    <span className="font-bold text-lg">${selected.price || '0.00'}</span>
                                    <span className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{selected.rating || '0.0'}</span>
                                    </span>
                                </div>

                                <p className="mt-2 text-gray-700 text-left w-full break-words">{selected.description}</p>
                            </div>

                            <div className="mt-6 flex justify-end gap-3">
                                <Button className="cursor-pointer" variant="outline" onClick={() => setSelected(null)}>
                                    Close
                                </Button>
                                <ProductCartButton
                                    product={{
                                        id: selected.id,
                                        name: selected.title ?? '',
                                        price: selected.price,
                                        slug: selected.slug,
                                        image: selected.image
                                    }}
                                />
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ProductPageCards;
