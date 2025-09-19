
import React from 'react';
import Image from 'next/image';

type Props = {
    params: {
        slide: string;
    };
};

const SingleProduct = async ({ params }: Props) => {
    const res = await fetch(`https://dummyjson.com/products/${params.slide}`);
    const product = await res.json();

    return (
        <div className="p-10 flex flex-col items-center gap-6">
            <div className="relative w-64 h-64">
                <Image src={product.thumbnail} alt={product.title} fill className="object-contain rounded-lg shadow" />
            </div>

            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 text-center max-w-xl">{product.description}</p>

            <span className="text-green-600 font-semibold text-xl">${product.price}</span>
        </div>
    );
};

export default SingleProduct;
