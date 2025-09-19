// components/AboutUs.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import CustomContainer from '../../common/CustomContainer';

const letters = ['A', 'B', 'O', 'U', 'T', 'U', 'S'];
const orangeIndexes = new Set([5, 6]);

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 }
    }
};

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const AboutUs: React.FC = () => {
    return (
        <section id="about_us" className="py-12 md:py-16 lg:py-20">
            <CustomContainer>
                <motion.div className="grid items-center gap-6 lg:grid-cols-12" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={containerVariants}>
                    {/* Title column */}
                    <div className="lg:col-span-1 col-span-full flex justify-center lg:justify-start">
                        <motion.h2 aria-label="About Us" className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-extrabold leading-none">
                            <motion.div className="flex flex-row lg:flex-col items-center lg:items-start space-x-2 lg:space-x-0 lg:space-y-2" variants={containerVariants}>
                                {letters.map((ch, idx) => (
                                    <motion.span key={idx} className={`block leading-none ${orangeIndexes.has(idx) ? 'text-[#ff8819]' : 'text-black'}`} variants={letterVariants}>
                                        {ch}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.h2>
                    </div>

                    {/* Image column */}
                    <motion.div className="lg:col-span-6 col-span-full order-2" variants={fadeUpVariants}>
                        <div className="mb-6 sm:mb-8 lg:mb-0">
                            <Image src="/image/about.jpeg" alt="About" width={900} height={600} className="w-full h-[40rem] object-cover" priority={false} />
                        </div>
                    </motion.div>

                    {/* Text column */}
                    <motion.div className="lg:col-span-5 col-span-full order-3" variants={fadeUpVariants}>
                        <div className="text">
                            <h3 className="mb-5 text-2xl sm:text-3xl font-bold">Where Innovation Meet Interior Design</h3>

                            <p className="font-semibold text-gray-800 mb-4">"Our passion for design transforms ordinary spaces into extraordinary experiences."</p>

                            <ul className="mb-4 space-y-3">
                                {['Lorem ipsum dolor sit amet consectetur adipisicing.', 'Lorem ipsum dolor sit amet consectetur adipisicing.', 'Lorem ipsum dolor sit amet consectetur adipisicing.'].map((txt, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        {/* small inline check icon */}
                                        <svg className="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M20 6L9 17l-5-5" stroke="#ff8819" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-gray-700">{txt}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam enim blanditiis, repellat tenetur sapiente omnis. Vitae quae error a laudantium fugit nam, officia velit beatae dicta, itaque repellat incidunt veritatis!</p>

                            <motion.a href="#" id="mainBtn" className="inline-block mainBtn bg-[#ff8819] text-white px-6 py-3 font-semibold hover:bg-[#e6760d] transition" variants={fadeUpVariants}>
                                Explore Now
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </CustomContainer>
        </section>
    );
};

export default AboutUs;
