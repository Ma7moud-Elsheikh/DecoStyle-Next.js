import ComingSoon from '@/app/components/sections/comingSoon/ComingSoon';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React from 'react';

export const metadata = {
    title: 'Coming Soon'
};

const page = () => {
    return (
        <div>
            <BreadCrumb />
            <ComingSoon />
        </div>
    );
};

export default page;
