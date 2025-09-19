import React from 'react';
import HomePage from './pages/HomePage';

export const metadata = {
    title: 'Home Page',
    description: 'Welcome to our home page!'
};

const page = () => {
    return (
        <div>
            <HomePage />
        </div>
    );
};

export default page;
