'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import ScrollToTopButton from '../ui/scrollToTop/ScrollToTopButton';

type props = {
    children: React.ReactNode;
};

const LayoutProvider = ({ children }: props) => {
    const pathname = usePathname();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true
        });
        AOS.refresh();
    }, []);
    const isComingSoon = pathname === '/coming-soon';
    return (
        <div>
            <Toaster />
            {!isComingSoon && <Navbar />}
            {children}
            {!isComingSoon && <Footer />}
            {!isComingSoon && <ScrollToTopButton />}
        </div>
    );
};

export default LayoutProvider;
