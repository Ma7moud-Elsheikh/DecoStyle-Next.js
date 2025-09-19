'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBarsStaggered, FaMagnifyingGlass, FaAngleDown } from 'react-icons/fa6';
import { BsCart4 } from 'react-icons/bs';
import { X } from 'lucide-react';

const MAIN = 'var(--main-color)';
const THIRD = 'var(--third-color)';

// navLinks
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' }
];

// pagesDropdown
const pagesDropdown = [
    { href: '/privacyPolicy', label: 'Privacy Policy', delay: 400 },
    { href: '/comingSoon', label: 'Coming Soon', delay: 500 }
];

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [fixed, setFixed] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();

    const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem('token');
            setIsAllowed(!!token);
        };

        checkToken();

        window.addEventListener('storage', checkToken);

        return () => {
            window.removeEventListener('storage', checkToken);
        };
    }, [isAllowed]);

    // scroll threshold = 200
    useEffect(() => {
        const onScroll = () => setFixed(window.scrollY >= 200);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // close mobile on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Search Bar
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsSearchOpen(false);
        };
        document.addEventListener('keydown', onKey);

        if (isSearchOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current?.focus(), 0);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [isSearchOpen]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = inputRef.current?.value?.trim();
        if (!value) return;
        console.log('Search for:', value);
        setIsSearchOpen(false);
    };

    // NavBar
    const baseText = useMemo(() => (fixed ? 'text-black' : 'text-white'), [fixed]);
    const linkClass = (href: string) => {
        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

        if (isActive) {
            return `text-[var(--main-color)] inline-block px-2 py-5 transition-colors duration-300 hover:text-[var(--main-color)]`;
        }

        return `${baseText} inline-block px-2 py-5 transition-colors duration-300 hover:text-[var(--main-color)]`;
    };

    return (
        <nav className={'w-full top-0 z-[9999] transition-all duration-300 ' + (fixed ? 'fixed bg-[var(--bg-color)] shadow-[0_7px_29px_0_var(--border-color)]' : 'absolute bg-transparent backdrop-blur-[12px]')} aria-label="Main Navigation">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 py-2">
                        <Image src="/image/logo2.png" alt="Logo" width={80} height={80} className="h-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2">
                        <ul className="flex items-center ml-auto">
                            {navLinks.map((l) => (
                                <li key={l.href} className="ml-6 overflow-hidden">
                                    <Link href={l.href} className={`${linkClass(l.href)} navEl`} style={{ fontFamily: 'var(--font)' }}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}

                            {/* Dropdown */}
                            <li className="ml-6 relative group" onClick={() => setIsOpen(!isOpen)}>
                                <button className={`${baseText} navEl inline-flex items-center gap-1 px-2 py-5 transition-colors duration-300 hover:text-[var(--main-color)]`} aria-haspopup="true" aria-expanded={isOpen} style={{ fontFamily: 'var(--font)' }}>
                                    Pages <FaAngleDown className="text-sm" />
                                </button>

                                <ul
                                    className={`
                                            absolute left-0 mt-2 w-56 rounded-md bg-white text-black shadow-lg transition-all duration-500
                                            ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-3'}
                                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                            `}
                                >
                                    {pagesDropdown.map((p: any, i: number) => (
                                        <li key={p.href} className="m-0 border-b border-[#ccc] last:border-b-0">
                                            <Link href={p.href} className="block px-4 py-3 font-medium transition-all duration-500 hover:text-[var(--third-color)]" style={{ transitionDelay: `${i * 100 + 150}ms` }}>
                                                {p.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="ml-6 overflow-hidden">
                                <Link href="/contact" className={`${linkClass('/contact')} navEl`} style={{ fontFamily: 'var(--font)' }}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* Right box: Login / Register / Search / Cart */}
                        <div className="flex items-center justify-center gap-3 pl-6 ml-6 border-l border-[#ccc] overflow-hidden">
                            {isAllowed ? (
                                <button
                                    className="font-bold revNavEl tracking-wider text-[var(--main-color)] transition-colors hover:text-[var(--third-color)] cursor-pointer"
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        window.location.href = '/login';
                                    }}
                                >
                                    LogOut
                                </button>
                            ) : (
                                <>
                                    <Link href="/login" className="font-bold revNavEl tracking-wider text-[var(--main-color)] transition-colors hover:text-[var(--third-color)]">
                                        Login
                                    </Link>
                                    <span className={`text-xl ${baseText} revNavEl`}>/</span>
                                    <Link href="/register" className="font-bold revNavEl tracking-wider text-[var(--main-color)] transition-colors duration-300 hover:text-[var(--third-color)]">
                                        Register
                                    </Link>
                                </>
                            )}

                            {/* Search (desktop) */}
                            <button
                                aria-label="Open search"
                                onClick={() => setIsSearchOpen(true)}
                                className={
                                    'ml-2 hidden lg:flex w-[45px] revNavEl h-[45px] items-center justify-center rounded-full border cursor-pointer transition-colors duration-300 ' +
                                    (fixed ? 'border-black text-black hover:border-[var(--third-color)] hover:text-[var(--third-color)]' : 'border-white text-white hover:border-[var(--third-color)] hover:text-[var(--third-color)]')
                                }
                            >
                                <FaMagnifyingGlass />
                            </button>

                            {/* Modal Search */}
                            <div
                                className={`fixed inset-0 z-[999999999] h-[100vh] flex items-center justify-center bg-[#0000008c] transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="search-modal-title"
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <div className={`relative w-[92%] sm:w-[85%] md:w-[80%] max-w-[600px] transform transition-all duration-300 ${isSearchOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-5'}`} onClick={(e) => e.stopPropagation()}>
                                    {/* Close button */}
                                    <button onClick={() => setIsSearchOpen(false)} aria-label="Close search" className="absolute -top-12 right-0 text-white text-3xl hover:text-[var(--main-color)] transition cursor-pointer">
                                        <X size={28} />
                                    </button>

                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                        <form className="flex" role="search" onSubmit={handleSearchSubmit}>
                                            <input ref={inputRef} id="search-modal-input" className="flex-1 px-4 py-3 rounded-l-md outline-none border border-gray-300" type="search" placeholder="Search" aria-label="Search" />
                                            <button type="submit" aria-label="Submit search" className="px-6 py-3 rounded-r-md bg-[var(--text-color)] border border-[var(--text-color)] text-white font-bold transition-colors duration-300 hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
                                                <FaMagnifyingGlass />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Cart with hover panel */}
                            <div className="relative ml-2 hidden lg:block group/payment">
                                <Link
                                    href="/cart"
                                    className={
                                        'flex w-[45px] revNavEl h-[45px] items-center justify-center rounded-full border transition-colors duration-300 ' +
                                        (fixed ? 'border-black text-black hover:border-[var(--third-color)] hover:text-[var(--third-color)]' : 'border-white text-white hover:border-[var(--third-color)] hover:text-[var(--third-color)]')
                                    }
                                >
                                    <BsCart4 />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile toggler */}
                    <button className={'lg:hidden p-2 text-2xl ' + (fixed ? 'text-[var(--main-color)]' : 'text-white')} onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle Menu" aria-expanded={mobileOpen} aria-controls="mobile-menu">
                        {mobileOpen ? <X size={24} /> : <FaBarsStaggered />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" className={'lg:hidden transition-all origin-top absolute ' + (mobileOpen ? 'scale-y-100 relative opacity-100' : 'scale-y-0 opacity-0 pointer-events-none')}>
                <div className="mt-2 px-4 pb-4 pt-2 bg-white text-black shadow-lg space-y-2">
                    {navLinks.map((l) => (
                        <Link key={l.href} href={l.href} className={`block px-2 py-2 rounded hover:bg-gray-100 ${pathname === l.href ? 'bg-gray-200 font-bold text-[var(--main-color)]' : ''}`}>
                            {l.label}
                        </Link>
                    ))}

                    {/* Dropdown (mobile) */}
                    <details className="px-2 py-2">
                        <summary className="cursor-pointer select-none py-2">Pages</summary>
                        <ul className="mt-1 ml-2 space-y-1">
                            {pagesDropdown.map((p) => (
                                <li key={p.href}>
                                    <Link href={p.href} className="block px-2 py-1 rounded hover:bg-gray-100">
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </details>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                        {isAllowed ? (
                            <button
                                className="font-bold revNavEl tracking-wider text-[var(--main-color)] transition-colors hover:text-[var(--third-color)] cursor-pointer"
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    window.location.href = '/login';
                                }}
                            >
                                LogOut
                            </button>
                        ) : (
                            <>
                                <Link href="/login" className="font-bold tracking-wider text-[var(--main-color)]">
                                    Login
                                </Link>
                                <span>/</span>
                                <Link href="/register" className="font-bold tracking-wider text-[var(--main-color)]">
                                    Register
                                </Link>
                            </>
                        )}
                        <button aria-label="Open search" className="ml-auto flex w-[40px] h-[40px] items-center justify-center rounded-full border border-black">
                            <FaMagnifyingGlass />
                        </button>
                        <Link aria-label="Open cart" href="/payment" className="flex w-[40px] h-[40px] items-center justify-center rounded-full border border-black">
                            <BsCart4 />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
