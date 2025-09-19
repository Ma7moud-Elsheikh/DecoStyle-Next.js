import clsx from 'clsx';
import React from 'react';

type Props = {
    children: React.ReactNode;
    customClass?: string;
};

const CustomContainer: React.FC<Props> = ({ children, customClass }) => {
    return <div className={clsx('w-full mx-auto px-4 sm:px-6 lg:px-8', 'max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl', customClass)}>{children}</div>;
};

export default CustomContainer;
