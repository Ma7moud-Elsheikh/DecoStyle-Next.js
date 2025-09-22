'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomContainer from '../../common/CustomContainer';

const BreadCrumb = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter((segment) => segment);

    const pageTitle =
        pathSegments.length > 0
            ? pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() +
            pathSegments[pathSegments.length - 1].slice(1)
            : 'Home';

    return (
        <div
            className="relative min-h-[80vh] flex items-center justify-start bg-cover bg-center bg-no-repeat z-10"
            style={{ backgroundImage: "url('/image/breadcrumb.jpeg')" }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 -z-0"></div>

            <CustomContainer>
                <div className="relative">
                    <p className="text-[var(--third-color)] font-bold text-[20px] mb-0">
                        Business Models you can Consider
                    </p>

                    <h2 className="text-white font-bold lg:text-[4.5rem] md:text-[4rem] sm:text-[3rem] text-3xl inline-block">
                        {pageTitle}
                    </h2>

                    {/* Breadcrumb nav */}
                    <nav className="relative z-10 mt-10" aria-label="breadcrumb">
                        <ol className="flex space-x-2 items-center justify-end">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white font-bold no-underline transition duration-300 hover:text-[var(--main-color)]"
                                >
                                    Home
                                </Link>
                            </li>
                            {pathSegments.map((segment, index) => {
                                const href = '/' + pathSegments.slice(0, index + 1).join('/');
                                const label = segment.charAt(0).toUpperCase() + segment.slice(1);

                                return (
                                    <li
                                        key={href}
                                        className="flex items-center text-white font-bold"
                                    >
                                        <span className="mx-2">/</span>
                                        {index === pathSegments.length - 1 ? (
                                            <span>{label}</span>
                                        ) : (
                                            <Link
                                                href={href}
                                                className="no-underline transition duration-300 hover:text-[var(--main-color)]"
                                            >
                                                {label}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
            </CustomContainer>
        </div>
    );
};

export default BreadCrumb;
