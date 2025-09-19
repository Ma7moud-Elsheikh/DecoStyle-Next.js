'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

const ContactSection = () => {
    return (
        <section className="relative bg-[url('/image/contact.jpeg')] bg-cover bg-center py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex justify-center mb-10">
                    <motion.h2 className="text-white font-bold text-4xl sm:text-5xl flex gap-1" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.span transition={{ delay: 0 }}>S</motion.span>
                        <motion.span transition={{ delay: 0.1 }}>i</motion.span>
                        <motion.span transition={{ delay: 0.2 }}>g</motion.span>
                        <motion.span transition={{ delay: 0.3 }}>n</motion.span>
                        <motion.span className="text-[#ff8819]" transition={{ delay: 0.5 }}>
                            U
                        </motion.span>
                        <motion.span className="text-[#ff8819]" transition={{ delay: 0.6 }}>
                            p
                        </motion.span>
                    </motion.h2>
                </div>

                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="mb-3">
                            <Link href="#" className="!px-[60px] !py-[12px] mainBtn rounded-[40px] block !bg-white !text-black transition-all duration-400">
                                Continue With <FaFacebookF className="text-[#1877f2] -mr-[10px] inline-block" size={18} /> acebook
                            </Link>
                        </div>

                        <div className="mb-3">
                            <Link href="#" className="!px-[60px] !py-[12px] mainBtn rounded-[40px] block !bg-transparent border border-white text-white hover:border-[var(--third-color)] transition-all duration-400">
                                Continue With
                                <Image src="/image/google.png" alt="google" className='inline-block ml-[10px] mr-[2px] ' width={20} height={20} />
                                oogle
                            </Link>
                        </div>

                        <div className="mt-6 space-y-2">
                            <p className="text-white font-bold text-lg">
                                Joined us before?{' '}
                                <a href="/login" className="text-[var(--main-color)] hover:text-[var(--third-color)] transition">
                                    Login
                                </a>
                            </p>
                            <p className="text-white font-bold text-lg">
                                Don&apos;t Have Account?{' '}
                                <a href="/register" className="text-[var(--main-color)] hover:text-[var(--third-color)] transition">
                                    Register
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
