'use client';

import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTopButton from '../ui/scrollToTop/ScrollToTopButton';

type props = {
    children: React.ReactNode;
};

const LayoutProvider = ({ children }: props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default LayoutProvider;
