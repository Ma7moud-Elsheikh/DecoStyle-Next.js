'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import FaqCard from '../../ui/faq/FaqCard';
import CustomContainer from '../../common/CustomContainer';

const letters = ['S', 'h', 'o', 'r', 't', 'F', 'a', 'q', 's'];
const orangeIndexes = new Set([5, 6, 7, 8]); // "Faqs"

const containerVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const letterVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

const faqList = [
    {
        id: 'One',
        title: '01. What is the latest technology trend in the ?',
        body: 'The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.'
    },
    {
        id: 'Two',
        title: '02. What is the latest technology trend in the ?',
        body: 'The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.'
    },
    {
        id: 'Three',
        title: '03. What is the latest technology trend in the ?',
        body: 'The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.'
    },
    {
        id: 'Four',
        title: '04. What is the latest technology trend in the ?',
        body: 'The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.'
    }
];

const FaqSection: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>('One');

    return (
        <section id="faq" className="py-12 md:py-16 lg:py-20" data-aos="fade-up" style={{ backgroundColor: 'var(--bg-color)' }}>
            <CustomContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
                    {/* Left: Image */}
                    <div className="order-2 lg:order-1 flex justify-center">
                        <div className="w-full">
                            <Image src="/image/faq.svg" alt="FAQ Illustration" width={420} height={420} className="w-full h-auto object-contain" priority />
                        </div>
                    </div>

                    {/* Right: FAQ Content */}
                    <div className="order-1 lg:order-2">
                        {/* Title */}
                        <motion.h2
                            aria-label="Short Faqs"
                            className="mb-8 md:mb-10 text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-extrabold leading-none flex flex-wrap gap-x-2 gap-y-1"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={containerVariants}
                        >
                            {letters.map((ch, idx) => (
                                <motion.span
                                    key={idx}
                                    className={`inline-block ${idx === 5 ? 'ml-4' : 'ml-[-8px]'}`}
                                    style={{
                                        color: orangeIndexes.has(idx) ? 'var(--main-color)' : 'var(--heading-color)'
                                    }}
                                    variants={letterVariants}
                                >
                                    {ch}
                                </motion.span>
                            ))}
                        </motion.h2>

                        {/* Accordion */}
                        <div className="space-y-4" id="accordionExample">
                            {faqList.map((item) => (
                                <FaqCard key={item.id} id={item.id} title={item.title} body={item.body} isOpen={activeId === item.id} onToggle={() => setActiveId((prev) => (prev === item.id ? null : item.id))} />
                            ))}
                        </div>
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default FaqSection;
