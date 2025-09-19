'use client';

import React, { useEffect, useState, useRef } from 'react';
import CustomContainer from '../components/common/CustomContainer';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

const ShopPage = () => {
    type Product = {
        id: number;
        title: string;
        description: string;
        price: number;
        thumbnail: string;
    };
    const [products, setProducts] = useState<Product[]>([]);
    const fetched = useRef(false);

    async function getAllProducts() {
        try {
            const req = await fetch('https://dummyjson.com/products');
            const res = (await req.json()).products;
            setProducts(res);

            toast.success('Products has been loaded successfully');
        } catch (error) {
            toast.error('Failed to load products');
        }
    }

    useEffect(() => {
        if (!fetched.current) {
            getAllProducts();
            fetched.current = true;
        }
    }, []);

    return (
        <CustomContainer>
            <div>Welcome To Shop Page</div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="mb-4">
                        <div className="h-[40vh] relative rounded-2xl overflow-hidden ">
                            <Image src={product.thumbnail} alt={`${product.title}-image`} fill />
                        </div>
                        <Link href={`/shop/${product.id}`} className="text-lg font-bold">
                            {product.title}
                        </Link>
                        <p>{product.description}</p>
                        <span className="text-green-500">${product.price}</span>
                    </div>
                ))}
            </div>
        </CustomContainer>
    );
};

export default ShopPage;
