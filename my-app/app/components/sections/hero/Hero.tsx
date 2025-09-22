'use client';

import React from 'react';
import styles from './hero.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import CustomContainer from '../../common/CustomContainer';

const slides = [
    {
        id: 1,
        bg: '/image/living-room-with-blue-sofa-gold-coffee-table.jpg',
        title: 'We Provide Reliable Creative Agency',
        desc: 'We, as a brand, turn your dreams into fantasque interiors and Creative Agency.',
        primaryHref: '/about',
        secondaryHref: '/contact'
    },
    {
        id: 2,
        bg: '/image/banner-4.jpg',
        title: 'We Provide Reliable Creative Agency',
        desc: 'We, as a brand, turn your dreams into fantasque interiors and Creative Agency.',
        primaryHref: '/about',
        secondaryHref: '/contact'
    },
    {
        id: 3,
        bg: '/image/banner-3.jpg',
        title: 'We Provide Reliable Creative Agency',
        desc: 'We, as a brand, turn your dreams into fantasque interiors and Creative Agency.',
        primaryHref: '/about',
        secondaryHref: '/contact'
    }
];

const Hero: React.FC = () => {
    return (
        <section id="landing" className="relative overflow-hidden">
            <button
                className="hero-prev hidden lg:flex text-black w-[53px] h-[53px] bg-white rounded-full items-center justify-center transition duration-300 absolute left-[100px] top-1/2 -translate-y-1/2 z-10 hover:bg-[var(--main-color)] hover:text-white cursor-pointer"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="hero-next hidden lg:flex text-black w-[53px] h-[53px] bg-white rounded-full items-center justify-center transition duration-300 absolute right-[100px] top-1/2 -translate-y-1/2 z-10 hover:bg-[var(--main-color)] hover:text-white cursor-pointer" aria-label="Next slide">
                <ChevronRight className="w-7 h-7" />
            </button>

            <Swiper modules={[Navigation, Pagination, Autoplay, A11y]} slidesPerView={1} loop autoplay={{ delay: 4500, disableOnInteraction: false }} navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }} className="mySwiper">
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`
                            relative
                            flex items-center justify-center
                            bg-center bg-cover bg-no-repeat
                            ${styles.zoomBackground}
                            min-h-[70vh] sm:min-h-[85vh] lg:min-h-[100vh]
                            `}
                            style={{ backgroundImage: `url(${item.bg})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 sm:bg-black/40 z-0"></div>

                            {/* Content */}
                            <div className="relative z-10 home-content m-auto text-center w-full">
                                <CustomContainer>
                                    <div className="mx-auto max-w-3xl">
                                        <div className="overflow-hidden mb-6">
                                            <h2 className={`text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[70px] ${styles.MoveTop}`}>{item.title}</h2>

                                            <p className={`text-white/90 mt-4 text-sm sm:text-lg md:text-xl ${styles.MoveTop}`}>{item.desc}</p>

                                            <div className="mt-8 flex items-center justify-center gap-4">
                                                <Link href={item.primaryHref} className={`inline-block !px-4 !py-2 md:!px-6 md:!py-3 lg:!px-8 lg:!py-4 bg-[var(--main-color)] text-white font-bold rounded transition duration-300 mainBtn ${styles.MoveRight}`}>
                                                    Read More
                                                </Link>

                                                <Link
                                                    href={item.secondaryHref}
                                                    className={`inline-block lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 border-2 border-white text-white font-bold rounded transition duration-300 hover:bg-[var(--main-color)] hover:border-[var(--main-color)] hover:text-white ${styles.MoveLeft}`}
                                                >
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CustomContainer>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
