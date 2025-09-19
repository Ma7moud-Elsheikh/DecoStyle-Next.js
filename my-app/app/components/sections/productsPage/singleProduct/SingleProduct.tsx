'use client';

import React from 'react';
import Image from 'next/image';
import CustomContainer from '@/app/components/common/CustomContainer';

interface Product {
    id: string;
    attributes: {
        title: string;
        description: string;
        price: number;
        slug: string;
        product_img?: {
            data?: Array<{
                attributes: {
                    url: string;
                };
            }>;
        };
    };
}

type Props = {
    product: Product | null;
};

const SingleProduct: React.FC<Props> = ({ product }) => {
    if (!product) {
        return <p className="p-10 text-center text-red-500">Product not found</p>;
    }

    const { attributes } = product;

    return (
        <CustomContainer>
            <div className="p-10 flex flex-col items-center gap-6">
                <div className="relative w-64 h-64">
                    <Image src={attributes?.product_img?.data?.[0]?.attributes?.url ? `http://localhost:1337${attributes.product_img.data[0].attributes.url}` : '/image/placeholder.png'} alt={attributes?.title || 'product'} fill className="object-contain rounded-lg shadow" />
                </div>
                <h1 className="text-3xl font-bold text-[var(--text-color)]">{attributes?.title}</h1>
                <p className="text-gray-600 text-center max-w-xl">{attributes?.description}</p>
                <span className="text-[var(--main-color)] font-semibold text-xl">${attributes?.price}</span>
            </div>
        </CustomContainer>
    );
};

export default SingleProduct;
