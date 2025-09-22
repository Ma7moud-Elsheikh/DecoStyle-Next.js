'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAnglesRight } from 'react-icons/fa6';

type RelatedProductsProps = {
    category: string;
    products: {
        slug: string;
        name: string;
    }[];
};

const RelatedProducts = ({ category, products }: RelatedProductsProps) => {
    const pathname = usePathname();

    if (!products.length) {
        return <div className="p-6 bg-gray-50 rounded-xl text-center text-gray-500">No related products found</div>;
    }

    return (
        <div className="flex flex-col space-y-3">
            {products.map((product, i) => {
                const active = pathname === `/products/${product.slug}`;
                return (
                    <Link
                        key={i}
                        href={`/products/${product.slug}`}
                        className={`!flex items-center justify-between mainBtn px-5 py-3 rounded-lg font-medium transition-all shadow-sm
                            ${active ? 'bg-[var(--main-color)] text-white' : 'bg-gray-100 hover:bg-[var(--third-color)] hover:text-white'}`}
                    >
                        <span>{product.name}</span>
                        <FaAnglesRight size={18} />
                    </Link>
                );
            })}
        </div>
    );
};

export default RelatedProducts;
