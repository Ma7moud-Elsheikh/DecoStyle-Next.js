import React from 'react';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import LoginSection from '@/app/components/sections/account/LoginSection';

export const metadata = {
    title: 'Login'
};

const LoginPage = () => {
    return (
        <>
            <BreadCrumb />
            <LoginSection/>
        </>
    );
};

export default LoginPage;
