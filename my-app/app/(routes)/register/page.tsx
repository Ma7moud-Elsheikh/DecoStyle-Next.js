import RegisterSection from '@/app/components/sections/account/RegisterSection';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React from 'react';

export const metadata = {
    title: 'Register'
};

const RegisterPage = () => {
    return (
        <div>
            <BreadCrumb />
            <RegisterSection />
        </div>
    );
};

export default RegisterPage;
