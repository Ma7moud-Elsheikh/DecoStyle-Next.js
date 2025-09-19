'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import CustomContainer from '../../common/CustomContainer';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import Link from 'next/link';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const RegisterSection = () => {
    const router = useRouter();
    const [isShowPass, setIsShowPass] = React.useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.replace('/profile');
        }
    }, [router]);

    const RegisterSchema = Yup.object({
        name: Yup.string().min(3, 'Too Short!').required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('Confirm Password is required')
    });

    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <CustomContainer>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-5/12 md:w-8/12 sm:w-10/12">
                        <Formik
                            initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                            onSubmit={async (values) => {
                                const data = {
                                    username: values.name,
                                    email: values.email,
                                    password: values.password
                                };

                                try {
                                    const res = await axios.post('http://localhost:1337/api/auth/local/register', data);
                                    const userToken = res.data.jwt;
                                    localStorage.setItem('token', userToken);
                                    if (res.status === 200) {
                                        toast.success(`Registration Successfully `, { position: 'top-center' });
                                        router.push('/');
                                    }
                                } catch (error) {
                                    console.error(error);
                                }
                            }}
                            validationSchema={RegisterSchema}
                        >
                            <Form className="bg-[var(--bg-color)] shadow-[0px_7px_29px_0px_rgba(0,0,0,0.2)] p-7 rounded-[10px] ">
                                <h3 className="text-center mb-5 text-[var(--third-color)] text-[20px]">Register</h3>
                                <div className="mb-6">
                                    <label className="mb-1 block" htmlFor="name">
                                        Name
                                    </label>
                                    <Field name="name" id="name" type="text" className="bg-white w-full border-0 outline-none shadow-none px-[15px] h-[60px] rounded-[5px] text-black" placeholder="Enter Your Name" />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-6">
                                    <label className="mb-1 block" htmlFor="email">
                                        Email
                                    </label>
                                    <Field name="email" id="email" type="email" className="bg-white w-full border-0 outline-none shadow-none px-[15px] h-[60px] rounded-[5px] text-black" placeholder="Enter Your Email" />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-6 relative">
                                    <label className="mb-1 block" htmlFor="password">
                                        Password
                                    </label>
                                    <Field name="password" id="password" type={isShowPass ? 'text' : 'password'} className="bg-white w-full border-0 outline-none shadow-none px-[15px] h-[60px] rounded-[5px] text-black" placeholder="Enter Your Password" />
                                    <span className="absolute right-3 top-12 cursor-pointer text-[18px]" onClick={() => setIsShowPass(!isShowPass)}>
                                        {isShowPass ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </span>
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-6 relative">
                                    <label className="mb-1 block" htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <Field name="confirmPassword" id="confirmPassword" type={isShowPass ? 'text' : 'password'} className="bg-white w-full border-0 outline-none shadow-none px-[15px] h-[60px] rounded-[5px] text-black" placeholder="Repeat Your Password" />
                                    <span className="absolute right-3 top-12 cursor-pointer text-[18px]" onClick={() => setIsShowPass(!isShowPass)}>
                                        {isShowPass ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </span>
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <button type="submit" className="mainBtn block w-full cursor-pointer">
                                    Register
                                </button>
                                <div className="mt-4 flex items-center justify-between">
                                    <span style={{ fontFamily: 'var(--font)' }} className="font-bold">
                                        Have Account?
                                    </span>
                                    <Link href={'/login'} className="text-[var(--third-color)] font-bold hover:text-[var(--main-color)]">
                                        Login
                                    </Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
};

export default RegisterSection;
