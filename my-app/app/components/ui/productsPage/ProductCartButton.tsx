'use client';

import { useEffect, useState, useCallback } from 'react';
import toast from 'react-hot-toast';

type ProductType = {
    id: string | number;
    name: string;
    price?: number | string;
    slug?: string;
    image?: string;
};

const LOCAL_KEY = 'wishlist'; 

export default function ProductCartButton({ product }: { product: ProductType }) {
    const [isInWishlist, setIsInWishlist] = useState<boolean>(() => {
        try {
            const saved = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_KEY) : null;
            const arr: ProductType[] = saved ? JSON.parse(saved) : [];
            return arr.some((p) => String(p.id) === String(product.id));
        } catch {
            return false;
        }
    });

    const syncFromStorage = useCallback(() => {
        try {
            const saved = localStorage.getItem(LOCAL_KEY);
            const arr: ProductType[] = saved ? JSON.parse(saved) : [];
            setIsInWishlist(arr.some((p) => String(p.id) === String(product.id)));
        } catch {
            setIsInWishlist(false);
        }
    }, [product.id]);

    useEffect(() => {
        window.addEventListener('storage', syncFromStorage);
        window.addEventListener('wishlist_updated', syncFromStorage as EventListener);
        return () => {
            window.removeEventListener('storage', syncFromStorage);
            window.removeEventListener('wishlist_updated', syncFromStorage as EventListener);
        };
    }, [syncFromStorage]);

    const toggle = () => {
        try {
            const saved = localStorage.getItem(LOCAL_KEY);
            const arr: ProductType[] = saved ? JSON.parse(saved) : [];

            const exists = arr.some((p) => String(p.id) === String(product.id));
            let updated: ProductType[];

            if (exists) {
                updated = arr.filter((p) => String(p.id) !== String(product.id));
                localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
                setIsInWishlist(false);
                toast.error(`${product.name} removed from wishlist`, { position: 'top-center' });
            } else {
                updated = [...arr, product];
                localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
                setIsInWishlist(true);
                toast.success(`${product.name} added to wishlist`, { position: 'top-center' });
            }

            window.dispatchEvent(new Event('wishlist_updated'));
        } catch (err) {
            console.error('Wishlist toggle error:', err);
            toast.error('Something went wrong', { position: 'top-center' });
        }
    };

    return (
        <button
            onClick={toggle}
            className={`px-6 py-3 rounded-xl font-semibold shadow transition cursor-pointer
        ${isInWishlist ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[var(--main-color)] hover:bg-[var(--third-color)] text-white'}`}
        >
            {isInWishlist ? 'Remove from Cart' : 'Add to Cart'}
        </button>
    );
}
