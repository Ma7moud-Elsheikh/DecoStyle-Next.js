'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import CustomContainer from '../../common/CustomContainer';
import { IoIosSearch, IoIosClose } from 'react-icons/io'; // Added IoIosClose for close button
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ZoomImage from '../../ui/image effect/ZoomImage';

const letters = ['O', 'u', 'r', 'P', 'r', 'o', 'd', 'u', 'c', 't', 's'];
const orangeIndexes = new Set([0, 1, 2]);

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } }
};

const images = [
    {
        src: '/image/products1.jpeg',
        h: 'h-[40rem]',
        name: 'Product 1',
        description: 'This is a detailed description of Product 1. It features high-quality materials and excellent craftsmanship.',
        price: 99.99,
        rating: 4.5
    },
    {
        src: '/image/pro-09.jpg',
        h: 'h-[calc(20rem-1.5rem)]',
        name: 'Product 2',
        description: 'Product 2 offers great value with its durable design and modern aesthetics.',
        price: 49.99,
        rating: 4.0
    },
    {
        src: '/image/009furniture-banner-04.jpg',
        h: 'h-[20rem]',
        name: 'Product 3',
        description: 'Experience comfort and style with Product 3, perfect for any home setting.',
        price: 79.99,
        rating: 4.8
    },
    {
        src: '/image/blog-single-01.jpg',
        h: 'h-[40rem]',
        name: 'Product 4',
        description: 'Product 4 is designed for functionality and elegance, suitable for everyday use.',
        price: 129.99,
        rating: 4.2
    }
];

const Products: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<(typeof images)[0] | null>(null);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <AiFillStar key={i} className="text-yellow-400 text-xl" /> : <AiOutlineStar key={i} className="text-yellow-400 text-xl" />);
        }
        return stars;
    };

    return (
        <section id="products" className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
            <CustomContainer>
                {/* Title */}
                <div className="text-center mb-12">
                    <motion.h2 aria-label="Our Products" className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-extrabold leading-none flex flex-wrap justify-center gap-x-1" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={containerVariants}>
                        {letters.map((ch, idx) => (
                            <motion.span key={idx} className={`inline-block ${orangeIndexes.has(idx) ? 'text-[#ff8819]' : 'text-black'} ${idx === 3 ? 'ml-4' : ''}`} variants={letterVariants}>
                                {ch}
                            </motion.span>
                        ))}
                    </motion.h2>
                </div>

                {/* Images Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {/* First Column */}
                    <div className="col-span-1" data-aos="fade-right">
                        <div className="relative group overflow-hidden cursor-pointer mb-6" onClick={() => setSelectedProduct(images[0])}>
                            <Image src={images[0].src} alt={images[0].name} width={800} height={600} className={`w-full ${images[0].h} object-cover transition-transform duration-500 group-hover:scale-110`} />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>
                            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff8819] px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 text-[20px] cursor-pointer">
                                <IoIosSearch />
                            </button>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-span-1 flex flex-col" data-aos="fade-up">
                        {images.slice(1, 3).map((img, i) => (
                            <div key={i} className="relative group overflow-hidden cursor-pointer mb-6" onClick={() => setSelectedProduct(img)}>
                                <Image src={img.src} alt={img.name} width={800} height={600} className={`w-full ${img.h} object-cover transition-transform duration-500 group-hover:scale-110`} />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>
                                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff8819] px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 text-[20px] cursor-pointer">
                                    <IoIosSearch />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Third Column */}
                    <div className="col-span-1" data-aos="fade-left">
                        <div className="relative group overflow-hidden cursor-pointer mb-6" onClick={() => setSelectedProduct(images[3])}>
                            <Image src={images[3].src} alt={images[3].name} width={800} height={600} className={`w-full ${images[3].h} object-cover transition-transform duration-500 group-hover:scale-110`} />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>
                            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff8819] px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 text-[20px] cursor-pointer">
                                <IoIosSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </CustomContainer>
            {/* Modal */}
            {selectedProduct && (
                <motion.div className="fixed inset-0 z-[9999] bg-black/80 flex items-center overflow-y-auto justify-center p-4" initial="hidden" animate="show" exit="exit" variants={modalVariants} onClick={() => setSelectedProduct(null)}>
                    <div className="relative bg-white rounded-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:text-gray-800 text-3xl" onClick={() => setSelectedProduct(null)}>
                            <IoIosClose />
                        </button>
                        {/* Left: Image with Zoom Effect */}
                        <div className="md:w-1/2 p-4">
                            <div className="relative w-full h-[400px] overflow-hidden">
                                <ZoomImage src={selectedProduct.src} />
                            </div>
                        </div>
                        {/* Right: Product Info */}
                        <div className="md:w-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                                <div className="flex items-center mb-4">
                                    <span className="text-lg font-semibold mr-2">Rating:</span>
                                    <div className="flex">{renderStars(selectedProduct.rating)}</div>
                                    <span className="ml-2">({selectedProduct.rating})</span>
                                </div>
                                <p className="text-xl font-bold mb-4">${selectedProduct.price.toFixed(2)}</p>
                            </div>
                            <button
                                className="bg-[#ff8819] text-white px-6 py-3 rounded-md hover:bg-[#e67a15] transition"
                                onClick={() => {
                                    alert(`${selectedProduct.name} added to cart!`);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Products;
