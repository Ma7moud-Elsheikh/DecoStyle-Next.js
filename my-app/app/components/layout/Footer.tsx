// components/layout/Footer.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa';
import CustomContainer from '../common/CustomContainer';

const Footer = () => {
    return (
        <footer className="site-footer relative overflow-hidden z-10 pt-[100px] pb-0 bg-white padding_mobile shadow-2xl">
            <CustomContainer>
                <div className="flex flex-wrap">
                    {/* Left Section */}
                    <div className="w-full xl:w-5/12 mb-6 px-3">
                        <div className="footer-widget">
                            <div className="footer-logo mb-4">
                                <Image src="/image/logo2.png" alt="DecoStyle Logo" width={120} height={60} className="w-28 h-auto" />
                            </div>
                            <p className="mb-2">Eros vivamus platea nullam id consequat eu sociis lectus aliquam nibh auctor elitsed libero pharetra consequat and fad sociis conubia favorite to risus.</p>
                            <p className="mb-2">Follow us:</p>
                            <div className="flex items-center gap-4">
                                <Link href="#" className="w-12 h-12 border border-black flex items-center justify-center rounded transition hover:bg-[#1877f2] hover:border-[#1877f2] hover:text-white">
                                    <FaFacebookF />
                                </Link>
                                <Link href="#" className="w-12 h-12 border border-black flex items-center justify-center rounded transition hover:bg-[#e60023] hover:border-[#e60023] hover:text-white">
                                    <FaPinterestP />
                                </Link>
                                <Link href="#" className="w-12 h-12 border border-black flex items-center justify-center rounded transition hover:bg-[#1da1f2] hover:border-[#1da1f2] hover:text-white">
                                    <FaTwitter />
                                </Link>
                                <Link href="#" className="w-12 h-12 border border-black flex items-center justify-center rounded transition hover:bg-[#833ab4] hover:border-[#833ab4] hover:text-white">
                                    <FaInstagram />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full xl:w-7/12 px-3">
                        <div className="flex flex-wrap">
                            {/* Services */}
                            <div className="w-full md:w-1/3 mb-6 px-3">
                                <div className="footer-widget">
                                    <h3 className="font-semibold text-2xl mb-3">Services</h3>
                                    <ul>
                                        {[
                                            { label: 'Web Design', href: '#' },
                                            { label: 'Web Development', href: '#' },
                                            { label: 'Mobile App', href: '#' },
                                            { label: 'Branding', href: '#' },
                                            { label: 'Graphic Design', href: '#' }
                                        ].map((item, i) => (
                                            <li key={i} className="group py-2 px-1 transition hover:bg-[#333] hover:rounded">
                                                <Link href={item.href} className="font-semibold inline-block text-black transition-transform duration-300 group-hover:text-[var(--main-color)] group-hover:translate-x-3">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* About Us */}
                            <div className="w-full md:w-1/3 mb-6 px-3">
                                <div className="footer-widget">
                                    <h3 className="font-semibold text-2xl mb-3">About Us</h3>
                                    <ul>
                                        {[
                                            { label: 'About Us', href: '/about' },
                                            { label: 'About Me', href: '#' },
                                            { label: 'Our Team', href: '#' },
                                            { label: 'Testimonials', href: '/testimonials' },
                                            { label: 'Get in Touch', href: '/contact' }
                                        ].map((item, i) => (
                                            <li key={i} className="group py-2 px-1 transition hover:bg-[#333] hover:rounded">
                                                <Link href={item.href} className="font-semibold inline-block text-black transition-transform duration-300 group-hover:text-[var(--main-color)] group-hover:translate-x-3">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Resources */}
                            <div className="w-full md:w-1/3 mb-6 px-3">
                                <div className="footer-widget">
                                    <h3 className="font-semibold text-2xl mb-3">Resources</h3>
                                    <ul>
                                        {[
                                            { label: 'Pricing', href: '#' },
                                            { label: 'Help Center', href: '#' },
                                            { label: 'Our Services', href: '#' },
                                            { label: 'Terms of Use', href: '#' },
                                            { label: 'Privacy Policy', href: '#' }
                                        ].map((item, i) => (
                                            <li key={i} className="group py-2 px-1 transition hover:bg-[#333] hover:rounded">
                                                <Link href={item.href} className="font-semibold inline-block text-black transition-transform duration-300 group-hover:text-[var(--main-color)] group-hover:translate-x-3">
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom border-t border-gray-300 py-6 mt-4">
                    <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
                        <div className="copyRight flex items-center gap-2 text-[16px]">
                            <p>
                                © {new Date().getFullYear()} Copyright{' '}
                                <Link href="/" className=" font-bold text-[var(--main-color)] hover:text-[var(--third-color)] transition duration-200">
                                    DecoStyle
                                </Link>
                            </p>
                            <p className="pl-2 border-l border-gray-400">All rights reserved</p>
                        </div>
                        <div className="policy mt-3 md:mt-0">
                            <ul className="flex gap-4 text-[16px]">
                                <li>
                                    <Link href="/privacy" className="hover:text-[var(--third-color)] transition duration-200">
                                        Privacy & Policy
                                    </Link>
                                </li>
                                <li className="border-l border-gray-400 pl-4">
                                    <Link href="/terms" className="hover:text-[var(--third-color)] transition duration-200">
                                        Terms of use
                                    </Link>
                                </li>
                                <li className="border-l border-gray-400 pl-4">
                                    <Link href="/cookie-policy" className="hover:text-[var(--third-color)] transition duration-200">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CustomContainer>
        </footer>
    );
};

export default Footer;
