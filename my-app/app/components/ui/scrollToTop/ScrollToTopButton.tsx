'use client';

import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed
        right-[15px]
        z-[99999]
        w-[44px]
        h-[44px]
        rounded-full
        bg-[var(--main-color)]
        hover:bg-[var(--third-color)]
        transition-all
        duration-500
        border-0
        outline-none
        cursor-pointer
        shadow-none
        flex items-center justify-center text-white text-xl
        ${isVisible ? 'bottom-[15px] opacity-100 visible' : 'bottom-[-15px] opacity-0 invisible'}
      `}
        >
            <FaAngleDoubleUp />
        </button>
    );
};

export default ScrollToTopButton;
