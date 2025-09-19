import AboutUs from '@/app/components/sections/about/AboutSection';
import AboutSection from '@/app/components/sections/about2/AboutSection';
import Products from '@/app/components/sections/products/ProductsSection';
import Testimonials from '@/app/components/sections/testimonials/TestimonialsSection';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCrumb />
            <AboutSection />
            <AboutUs />
            <Products />
            <Testimonials />
        </div>
    );
};

export default page;
