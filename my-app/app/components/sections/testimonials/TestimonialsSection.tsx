'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// Swiper CSS imports are handled in globals.css or layout.tsx
import 'swiper/css';
import 'swiper/css/pagination';
import CustomContainer from '../../common/CustomContainer';

const letters = ['T', 'e', 's', 't', 'i', 'm', 'o', 'n', 'i', 'a', 'l', 's'];
const orangeSet = new Set([0, 1, 2, 3, 4]);

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
};

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const cards = [
    {
        id: 1,
        name: 'Brenda Gregory',
        role: 'CEO of Apple',
        img: '/image/testimonial-2-1.jpg',
        text: 'Divide carefully fruitsome sixth form beginning replenis together midst lesser to airs there brought forth him she us one seas can was void can be aware were nots multiply image female best project.'
    },
    {
        id: 2,
        name: 'Brenda Gregory',
        role: 'CEO of Apple',
        img: '/image/testimonial-2-2.jpg',
        text: 'Divide carefully fruitsome sixth form beginning replenis together midst lesser to airs there brought forth him she us one seas can was void can be aware were nots multiply image female best project.'
    },
    {
        id: 3,
        name: 'Brenda Gregory',
        role: 'CEO of Apple',
        img: '/image/testimonial-2-3.jpg',
        text: 'Divide carefully fruitsome sixth form beginning replenis together midst lesser to airs there brought forth him she us one seas can was void can be aware were nots multiply image female best project.'
    },
    {
        id: 4,
        name: 'Brenda Gregory',
        role: 'CEO of Apple',
        img: '/image/testimonial-2-4.jpg',
        text: 'Divide carefully fruitsome sixth form beginning replenis together midst lesser to airs there brought forth him she us one seas can was void can be aware were nots multiply image female best project.'
    },
    {
        id: 5,
        name: 'Brenda Gregory',
        role: 'CEO of Apple',
        img: '/image/testimonial-2-5.jpg',
        text: 'Divide carefully fruitsome sixth form beginning replenis together midst lesser to airs there brought forth him she us one seas can was void can be aware were nots multiply image female best project.'
    },
    {
        id: 6,
        name: 'Brenda Gregory',
        role: 'CEO of Apple',
        img: '/image/testimonial-2-6.jpg',
        text: 'Divide carefully fruitsome sixth form beginning replenis together midst lesser to airs there brought forth him she us one seas can was void can be aware were nots multiply image female best project.'
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-12 md:py-16 lg:py-20">
            <CustomContainer>
                <div className="flex justify-center mb-8">
                    <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={containerVariants} className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-extrabold leading-none flex flex-wrap justify-center gap-x-3">
                        <motion.div className="flex" variants={containerVariants}>
                            {letters.map((ch, i) => (
                                <motion.span key={i} className={`inline-block`} style={{ color: orangeSet.has(i) ? 'var(--main-color)' : 'var(--heading-color)' }} variants={letterVariants}>
                                    {ch}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                    className="py-8"
                >
                    {cards.map((c) => (
                        <SwiperSlide key={c.id} className="h-auto pb-10">
                            <div className="h-full flex">
                                <div className="relative bg-[var(--bg-color)] rounded-2xl pt-10 pb-8 px-6 text-center shadow-sm h-full">
                                    <div className="w-24 h-full rounded-full relative overflow-hidden m-auto border-4 border-white shadow">
                                        <Image src={c.img} alt={c.name} width={96} height={96} className="object-cover" />
                                    </div>
                                    <div className="flex justify-center gap-2 mt-4 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} style={{ color: 'var(--main-color)' }} />
                                        ))}
                                    </div>
                                    <h3 className="font-bold text-lg" style={{ color: 'var(--heading-color)' }}>
                                        <a href="#" className="underline-offset-2">
                                            {c.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1" style={{ color: 'var(--main-color)' }}>
                                        {c.role}
                                    </p>
                                    <p className="mt-4 text-[18px] leading-relaxed" style={{ color: 'var(--text-color)' }}>
                                        {c.text}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CustomContainer>
        </section>
    );
};

export default Testimonials;
