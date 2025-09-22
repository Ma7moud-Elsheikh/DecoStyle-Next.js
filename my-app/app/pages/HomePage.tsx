'use client';

import AboutSection from '../components/sections/about/AboutSection';
import ContactSection from '../components/sections/contact/ContactSection';
import FaqSection from '../components/sections/faqs/FaqSection';
import Hero from '../components/sections/hero/Hero';
import ProductsSection from '../components/sections/products/ProductsSection';
import Testimonials from '../components/sections/testimonials/TestimonialsSection';

export const metadata = {
    title: 'Home'
};

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
