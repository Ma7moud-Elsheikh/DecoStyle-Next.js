'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        company: '',
        message: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        mobile: Yup.string().required('Mobile is required'),
        company: Yup.string(),
        message: Yup.string().required('Message is required')
    });

    const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
        console.log('Form Data:', values);

        // show success toaster
        toast.success('Your message has been sent successfully!',{
            duration: 4000,
            position: 'top-center',
        });

        // reset form after submit
        resetForm();
    };

    return (
        <div className="contact_page py-20">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="max-w-6xl mx-auto">
                <div className="bg-[var(--bg-color)] rounded-xl p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <div className="bg-white rounded-xl p-8 shadow">
                            <h3 className="text-3xl font-bold border-b pb-4 mb-8 uppercase text-black" style={{ fontFamily: 'var(--font)' }}>
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 bg-[var(--bg-color)] p-5 rounded-md">
                                    <div className="bg-[var(--main-color)] w-14 h-14 flex items-center justify-center text-white text-xl rounded-md shadow">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Address</h5>
                                        <p className="text-[var(--third-color)] m-0">7515 Carriage Court, CA, 92236 USA</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-[var(--bg-color)] p-5 rounded-md">
                                    <div className="bg-[var(--main-color)] w-14 h-14 flex items-center justify-center text-white text-xl rounded-md shadow">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Contact Number</h5>
                                        <p className="text-[var(--third-color)] m-0">
                                            <a href="tel:(+6656)1598596969" className="hover:text-[var(--main-color)] transition">
                                                (+6656) 1598596969
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-[var(--bg-color)] p-5 rounded-md">
                                    <div className="bg-[var(--main-color)] w-14 h-14 flex items-center justify-center text-white text-xl rounded-md shadow">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Email Us</h5>
                                        <p className="text-[var(--third-color)] m-0">
                                            <a href="mailto:shifamoni6790@gmail.com" className="hover:text-[var(--main-color)] transition">
                                                shifamoni6790@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <h2 className="text-4xl font-bold border-b pb-4 mb-10 text-black">Get A Quote</h2>

                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                {({ isSubmitting }) => (
                                    <Form className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <Field type="text" name="name" placeholder="Your Name" className="w-full border-none outline-none rounded-md p-4 bg-white shadow" />
                                                <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <Field type="email" name="email" placeholder="Your Email" className="w-full border-none outline-none rounded-md p-4 bg-white shadow" />
                                                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <Field type="text" name="mobile" placeholder="Your Mobile" className="w-full border-none outline-none rounded-md p-4 bg-white shadow" />
                                                <ErrorMessage name="mobile" component="p" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <Field type="text" name="company" placeholder="Your Company" className="w-full border-none outline-none rounded-md p-4 bg-white shadow" />
                                                <ErrorMessage name="company" component="p" className="text-red-500 text-sm mt-1" />
                                            </div>
                                        </div>

                                        <div>
                                            <Field as="textarea" name="message" placeholder="Message" className="w-full border-none outline-none rounded-md p-4 bg-white shadow min-h-[150px]" />
                                            <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-[var(--main-color)] text-white px-6 py-3 mainBtn rounded-md hover:bg-black transition">
                                            Get Started <span>↗</span>
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
