import ProfilePage from '@/app/components/sections/profilePage/ProfilePage';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCrumb />
            <ProfilePage />
        </div>
    );
};

export default page;
