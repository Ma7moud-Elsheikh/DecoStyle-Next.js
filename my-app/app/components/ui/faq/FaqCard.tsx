'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FaqCardProps {
    id: string;
    title: string;
    body: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqCard: React.FC<FaqCardProps> = ({ id, title, body, isOpen, onToggle }) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-transparent overflow-hidden">
            <h2>
                <button
                    id={`button-${id}`}
                    aria-controls={`panel-${id}`}
                    aria-expanded={isOpen}
                    onClick={onToggle}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onToggle();
                        }
                    }}
                    className={`w-full flex items-center cursor-pointer justify-between text-left sm:px-5 sm:py-4 px-3 py-2 font-semibold transition-colors duration-300
            ${isOpen ? 'text-[var(--main-color)]' : 'text-[var(--heading-color)]'}`}
                >
                    <span className="pr-6 leading-snug text-[17px]">{title}</span>
                    <span
                        className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10
            transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: 'var(--main-color)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </h2>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        id={`panel-${id}`}
                        role="region"
                        aria-labelledby={`button-${id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="bg-white px-5 py-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-color)' }}>
                            {body}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqCard;
