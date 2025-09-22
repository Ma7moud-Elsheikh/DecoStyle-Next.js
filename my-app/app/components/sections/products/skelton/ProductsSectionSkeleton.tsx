'use client';
import React from 'react';

const ProductsSectionSkeleton: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 h-[40rem] animate-pulse rounded"></div>

            <div className="flex flex-col gap-6">
                <div className="bg-gray-200 h-[20rem] animate-pulse rounded"></div>
                <div className="bg-gray-200 h-[20rem] animate-pulse rounded"></div>
            </div>

            <div className="bg-gray-200 h-[40rem] animate-pulse rounded"></div>
        </div>
    );
};

export default ProductsSectionSkeleton;
