import ContactPage from '@/app/components/sections/contactPage/ContactPage';
import BreadCrumb from '@/app/components/ui/bredCrumb/BreadCrumb';
import { title } from 'process';
import React from 'react';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with us for any inquiries or support.'
};

const ContactUs = () => {
    return (
        <div>
            <BreadCrumb />
            <ContactPage />
        </div>
    );
};

export default ContactUs;
