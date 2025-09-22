'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomContainer from '../../common/CustomContainer';
import { FaRegTrashAlt } from 'react-icons/fa';
import CartItemSkeleton from './skelton/CartItemSkeleton';
import toast from 'react-hot-toast';

type CartItem = {
    id: string;
    slug: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
};

const LOCAL_KEY = 'wishlist';

// Helper to safely extract image string
const extractImage = (p: any) => {
    if (!p) return '';
    if (typeof p === 'string') return p;
    if (typeof p.image === 'string') return p.image;
    if (p.image && typeof p.image === 'object') return p.image.url ?? '';
    return p.url ?? '';
};

const getInitialCart = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(LOCAL_KEY);
    if (!stored) return [];
    try {
        const parsed = JSON.parse(stored) as any[];
        return parsed.map((p) => ({
            id: String(p.id ?? p._id ?? ''),
            slug: String(p.slug ?? p.id ?? p._id ?? ''),
            title: String(p.title ?? p.name ?? ''),
            image: extractImage(p),
            price: Number(p.price) || 0,
            quantity: Number(p.quantity ?? 1)
        }));
    } catch (e) {
        console.error('Failed to parse wishlist from localStorage', e);
        return [];
    }
};

const CartPage = () => {
    const [cart, setCart] = useState<CartItem[]>(getInitialCart);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // disable loading after mount
    useEffect(() => {
        setIsLoading(false);
    }, []);

    // sync cart -> localStorage whenever cart changes (persist quantities)
    useEffect(() => {
        try {
            // store the product objects (including quantity) so Products page can read them too
            const toStore = cart.map((c) => ({
                id: c.id,
                slug: c.slug,
                title: c.title,
                image: c.image,
                price: c.price,
                quantity: c.quantity
            }));
            localStorage.setItem(LOCAL_KEY, JSON.stringify(toStore));
        } catch (e) {
            console.error('Failed to write wishlist to localStorage', e);
        }
    }, [cart]);

    // Listen to storage events (other tabs) so cart stays in sync
    useEffect(() => {
        const handler = (e: StorageEvent) => {
            if (e.key === LOCAL_KEY) {
                setCart(getInitialCart());
            }
        };
        window.addEventListener('storage', handler);
        return () => window.removeEventListener('storage', handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Increase quantity
    const increaseQuantity = (id: string) => {
        setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    // Decrease quantity (min 1)
    const decreaseQuantity = (id: string) => {
        setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item)));
    };

    // Remove item (toast inside setState to avoid duplicates)
    const removeItem = (id: string) => {
        setCart((prev) => {
            const updated = prev.filter((item) => item.id !== id);
            return updated;
        });
        toast.success('Item removed from cart', { position: 'top-center' });
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: 'var(--bg-color)' }}>
            <CustomContainer>
                <h1 className="text-3xl font-bold mb-6 text-[var(--main-color)]">Shopping Cart</h1>

                {isLoading ? (
                    //  Skeleton Table
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow">
                            <thead className="bg-[var(--main-color)] text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">Image</th>
                                    <th className="py-3 px-4 text-left">Product</th>
                                    <th className="py-3 px-4 text-center">Quantity</th>
                                    <th className="py-3 px-4 text-right">Price</th>
                                    <th className="py-3 px-4 text-center">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItemSkeleton />
                                <CartItemSkeleton />
                                <CartItemSkeleton />
                            </tbody>
                        </table>
                    </div>
                ) : cart.length === 0 ? (
                    //  Empty Cart
                    <div className="text-center py-20">
                        <p className="text-xl font-semibold text-gray-600 mb-4">Your Cart Is Empty</p>
                        <Link href="/products" className="inline-block px-6 py-3 bg-[var(--main-color)] text-white font-medium rounded-lg shadow hover:opacity-90 transition">
                            Go To Shopping
                        </Link>
                    </div>
                ) : (
                    // Cart Items
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow">
                                <thead className="bg-[var(--main-color)] text-white">
                                    <tr>
                                        <th className="py-3 px-4 text-left">Image</th>
                                        <th className="py-3 px-4 text-left">Product</th>
                                        <th className="py-3 px-4 text-center">Quantity</th>
                                        <th className="py-3 px-4 text-right">Price</th>
                                        <th className="py-3 px-4 text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id} className="border-t hover:bg-gray-50">
                                            <td className="py-3 px-4">
                                                <Link href={`/products/${item.slug}`}>
                                                    <Image src={item.image} alt={item.title || 'Product image'} width={60} height={60} className="rounded-lg object-contain" />
                                                </Link>
                                            </td>
                                            <td className="py-3 px-4 font-medium text-[var(--text-color)]">
                                                <Link href={`/products/${item.slug}`} className="hover:underline">
                                                    {item.title}
                                                </Link>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-[var(--third-color)] text-white rounded hover:opacity-90 cursor-pointer">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-right text-[var(--main-color)] font-semibold">${Number(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="py-3 px-4 text-center">
                                                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 font-bold cursor-pointer">
                                                    <FaRegTrashAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Total price section */}
                        <div className="mt-6 flex justify-end">
                            <p className="text-xl font-bold text-[var(--text-color)]">
                                Total: <span className="text-[var(--main-color)]">${totalPrice.toFixed(2)}</span>
                            </p>
                        </div>
                    </>
                )}
            </CustomContainer>
        </div>
    );
};

export default CartPage;
