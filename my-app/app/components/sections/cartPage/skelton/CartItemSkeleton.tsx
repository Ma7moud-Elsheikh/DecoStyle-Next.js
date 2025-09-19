import React from 'react';

const CartItemSkeleton = () => {
    return (
        <tr className="animate-pulse border-t">
            {/* Image */}
            <td className="py-3 px-4">
                <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
            </td>

            {/* Product Title */}
            <td className="py-3 px-4">
                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
            </td>

            {/* Quantity */}
            <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded" />
                    <div className="w-6 h-4 bg-gray-200 rounded" />
                    <div className="w-6 h-6 bg-gray-200 rounded" />
                </div>
            </td>

            {/* Price */}
            <td className="py-3 px-4 text-right">
                <div className="h-4 w-12 bg-gray-200 rounded ml-auto" />
            </td>

            {/* Remove Button */}
            <td className="py-3 px-4 text-center">
                <div className="w-6 h-6 bg-gray-200 rounded-full mx-auto" />
            </td>
        </tr>
    );
};

export default CartItemSkeleton;
