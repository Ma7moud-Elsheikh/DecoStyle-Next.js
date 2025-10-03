import PrivacyPage from '@/app/components/sections/PrivacyPolicy/PrivacyPage';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React from 'react';

export const metadata = {
    title: 'Privacy Policy'
};

const page = () => {
    return (
        <div>
            <BreadCrumb />
            <PrivacyPage />
        </div>
    );
};

export default page;
