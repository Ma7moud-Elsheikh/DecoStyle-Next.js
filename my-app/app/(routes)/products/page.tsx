import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import Products from '@/app/components/sections/productsPage/Products';
import React from 'react';

export const metadata = {
    title: 'Products'
};

const page = () => {
    return <div>
        <BreadCrumb/>
        <Products/>
    </div>;
};

export default page;
