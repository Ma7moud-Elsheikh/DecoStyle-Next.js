'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type RelatedProductsProps = {
    category: string;
    products: {
        slug: string;
        name: string;
    }[];
};

const RelatedProducts = ({ category, products }: RelatedProductsProps) => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col space-y-4">
            {products.map((product, i) => (
                <Link key={i} href={`/products/${product.slug}`} className={`flex items-center justify-between px-6 py-4 text-lg font-medium bg-gray-100 hover:bg-orange-500 hover:text-white transition-all ${pathname === `/products/${product.slug}` ? 'bg-orange-500 text-white' : ''}`}>
                    <span>{product.name}</span>
                    <i className="fa-solid fa-angles-right"></i>
                </Link>
            ))}
        </div>
    );
};

export default RelatedProducts;
