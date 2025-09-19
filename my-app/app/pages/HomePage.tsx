'use client';

import React from 'react';
import Hero from '../components/sections/hero/Hero';
import AboutSection from '../components/sections/about/AboutSection';
import ProductsSection from '../components/sections/products/ProductsSection';
import FaqSection from '../components/sections/faqs/FaqSection';
import Testimonials from '../components/sections/testimonials/TestimonialsSection';
import ContactSection from '../components/sections/contact/ContactSection';
import LoginPage from '../(routes)/login/page';
import RegisterPage from '../(routes)/register/page';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ProductsSection />
            <FaqSection />
            <Testimonials />
            <ContactSection />
        </div>
    );
};

export default HomePage;
