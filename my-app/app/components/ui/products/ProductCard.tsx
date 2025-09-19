'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import { BiHeart } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';

interface ProductCardProps {
    id: string;
    title: string;
    category: string;
    image: string;
    modalContent: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, category, image, modalContent }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="relative overflow-hidden group">
                <div className="relative">
                    <Image src={image} alt={title} width={300} height={300} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-65 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <button
                        className="absolute left-1/2 top-[-100%] group-hover:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 py-2 rounded-none transition-all duration-500"
                        style={{ backgroundColor: 'var(--main-color)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--third-color)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--main-color)')}
                        onClick={() => setShowModal(true)}
                        aria-label="View Details"
                    >
                        <FaEye className="text-white" />
                    </button>
                    <div className="absolute top-4 right-4 z-20">
                        <BiHeart className="text-white text-xl" style={{ color: 'var(--main-color)' }} />
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-lg font-semibold" style={{ color: 'var(--heading-color)' }}>
                        <Link href="/product-details" className="hover:underline">
                            {title}
                        </Link>
                    </h2>
                    <p className="text-sm" style={{ color: 'var(--text-color)' }}>
                        {category}
                    </p>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton style={{ backgroundColor: 'var(--bg-color)' }}>
                    <Modal.Title style={{ color: 'var(--heading-color)' }}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: 'var(--text-color)' }}>{modalContent}</Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'var(--bg-color)' }}>
                    <Button variant="secondary" onClick={() => setShowModal(false)} style={{ backgroundColor: 'var(--main-color)', borderColor: 'var(--main-color)' }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductCard;
