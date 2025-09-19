'use client';

import CartPage from '@/app/components/sections/cartPage/CartPage';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        if (!token) {
            window.location.href = '/login';
        }
    }, []);

    if (isLoggedIn === null) {
        return <h1 className="text-3xl font-bold text-center mt-10">Loading...</h1>;
    }
    return (
        <div>
            <BreadCrumb />
            <CartPage />
        </div>
    );
};

export default page;
