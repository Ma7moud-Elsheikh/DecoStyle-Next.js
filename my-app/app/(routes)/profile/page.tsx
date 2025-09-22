import ProfilePage from '@/app/components/sections/profilePage/ProfilePage';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React from 'react';

export const metadata = {
    title: 'Profile'
};

const page = () => {
    return (
        <div>
            <BreadCrumb />
            <ProfilePage />
        </div>
    );
};

export default page;
