// app/products/[slug]/page.tsx
import Image from 'next/image';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import RelatedProducts from '@/app/components/ui/productsPage/RelatedProducts';

type Props = {
    params: { slug: string };
};

// ✅ Get single product by slug
const getProduct = async (slug: string) => {
    const res = await fetch(`http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=product_img,category`, { cache: 'no-store' });

    if (!res.ok) throw new Error('Failed to fetch product');
    const data = await res.json();
    return data.data?.[0] || null;
};

// ✅ Get related products from same category
const getRelatedProducts = async (category: string, excludeSlug: string) => {
    const res = await fetch(`http://localhost:1337/api/products?filters[category][$eq]=${category}&filters[slug][$ne]=${excludeSlug}&populate=product_img`, { cache: 'no-store' });

    if (!res.ok) throw new Error('Failed to fetch related products');
    const data = await res.json();
    return data.data || [];
};

const SingleProductPage = async ({ params }: Props) => {
    const product = await getProduct(params.slug);

    if (!product) {
        return <div className="p-10 text-center text-red-500">Product not found</div>;
    }

    const { name, description, price, product_img, category, slug } = product.attributes;

    const relatedProducts = await getRelatedProducts(category, slug);

    return (
        <div>
            <BreadCrumb />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-10">
                {/* Sidebar - Related Products */}
                <div className="lg:col-span-4 space-y-6">
                    <RelatedProducts
                        category={category}
                        products={relatedProducts.map((item: any) => ({
                            slug: item.attributes.slug,
                            name: item.attributes.name
                        }))}
                    />
                </div>

                {/* Main Product */}
                <div className="lg:col-span-8 space-y-6 flex flex-col items-center">
                    <div className="relative w-64 h-64">
                        <Image src={product_img?.data?.[0]?.attributes?.url ? `http://localhost:1337${product_img.data[0].attributes.url}` : '/image/placeholder.png'} alt={name} fill className="object-contain rounded-lg shadow" />
                    </div>

                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-gray-600 text-center max-w-xl">{description}</p>
                    <span className="text-green-600 font-semibold text-xl">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
