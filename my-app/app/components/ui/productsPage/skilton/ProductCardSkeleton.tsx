'use client';

import React from 'react';

interface SkeletonProps {
    count?: number;
}

const ProductCardSkeleton: React.FC<SkeletonProps> = ({ count = 1 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="isotope-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 p-3">
                    <div className="tab-content-box relative overflow-hidden rounded-xl bg-white shadow group min-h-[30rem] animate-pulse">

                        <div className="absolute right-2 top-1/3 z-20 h-10 w-10 rounded-full bg-white" />
                        <div className="absolute right-2 top-1/2 z-20 h-10 w-10 rounded-full bg-white" />

                        <div className="w-full h-[30rem] bg-gray-300" />

                        <div className="absolute bottom-0 left-0 w-full bg-gray-200 p-4 text-center">
                            <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductCardSkeleton;
