'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomContainer from '../../common/CustomContainer';

const AboutSection = () => {
    const title = [
        ['W', 'h', 'e', 'r', 'e'],
        ['I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'o', 'n'],
        ['M', 'e', 'e', 't'],
        ['I', 'n', 't', 'e', 'r', 'i', 'o', 'r'],
        ['D', 'e', 's', 'i', 'g', 'n']
    ];

    const progresses = [
        { label: 'Architecture', value: 80 },
        { label: 'Interior', value: 95 }
    ];

    return (
        <section className="p-[var(--padding)]">
            <CustomContainer>
                <div className="grid lg:grid-cols-12 gap-8 items-center justify-center">
                    {/* Images */}
                    <div className="lg:col-span-5 md:col-span-6 sm:col-span-6 lg:flex hidden items-center gap-4 ">
                        <Image src="/image/blog-single-01.jpg" alt="about-1" width={380} height={620} className="w-full h-[620px] min-w-[380px] object-cover rounded-md" />
                        <Image src="/image/009furniture-banner-04.jpg" alt="about-2" width={380} height={582} className="w-full h-[582px] min-w-[380px] object-cover rounded-md" />
                    </div>

                    {/* Text Section */}
                    <div className="lg:col-span-7 md:col-span-12">
                        <div className="bg-white rounded-[50px] lg:px-[70px] px-[20px] lg:py-[60px] py-[20px] relative z-10">
                            {/* Title */}
                            <h2 className="text-black md:text-[54px] text-[30px] font-[var(--font)] mb-6 max-w-[37rem] flex flex-wrap gap-x-5">
                                {title.map((word, i) => (
                                    <div key={i} className="inline-block">
                                        {word.map((letter, j) => (
                                            <motion.span key={j} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.5 + j * 0.1 }}>
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                ))}
                            </h2>

                            {/* Design Box */}
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/image/about-one-design-make-img-1.jpg" alt="design" width={100} height={100} className="rounded-md" />
                                <div>
                                    <h4 className="text-black font-bold text-xl">Design Make Dream</h4>
                                    <p className="text-black w-[70%] m-0">Rapidiously evolve pandemic experiences and Dramatically administrate</p>
                                </div>
                            </div>

                            {/* Progress Bars */}
                            <div className="max-w-[500px]">
                                {progresses.map((item, idx) => (
                                    <div key={idx} className="mb-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[22px] text-black font-bold">{item.label}</span>
                                        </div>
                                        <div className="relative w-full h-[3px] bg-[#63615633]">
                                            <motion.span initial={{ width: 0 }} animate={{ width: `${item.value}%` }} transition={{ duration: 1, delay: 0.3 }} className="h-full block bg-[var(--main-color)] relative">
                                                <span className="absolute right-0 bottom-2 text-black font-semibold">{item.value}%</span>
                                            </motion.span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default AboutSection;
