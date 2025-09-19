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

const LoginSection = () => {
    const router = useRouter();
    const [isShowPass, setIsShowPass] = React.useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.replace('/profile');
        }
    }, [router]);

    const LoginSchema = Yup.object({
        email: Yup.string().email('Invalid email').required(),
        password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required()
    });

    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <CustomContainer>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-5/12 md:w-8/12 sm:w-10/12">
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={async (values) => {
                                const data = {
                                    identifier: values.email,
                                    password: values.password
                                };

                                try {
                                    const res = await axios.post('http://localhost:1337/api/auth/local', data);
                                    const userToken = res.data.jwt;
                                    localStorage.setItem('token', userToken);
                                    if (res.status === 200) {
                                        toast.success(`Login Successfully `, { position: 'top-center' });
                                        router.push('/');
                                    }
                                } catch (error) {
                                    console.error(error);
                                }
                            }}
                            validationSchema={LoginSchema}
                        >
                            <Form className="bg-[var(--bg-color)] shadow-[0px_7px_29px_0px_rgba(0,0,0,0.2)] p-7 rounded-[10px] ">
                                <h3 className="text-center mb-5 text-[var(--third-color)] text-[20px]">Login</h3>
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
                                <button type="submit" className="mainBtn block w-full cursor-pointer">
                                    Login
                                </button>
                                <div className="mt-4 flex items-center justify-between">
                                    <span style={{ fontFamily: 'var(--font)' }} className="font-bold">
                                        Don't Have Account?
                                    </span>
                                    <Link href={'/register'} className="text-[var(--third-color)] font-bold hover:text-[var(--main-color)]">
                                        Register
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

export default LoginSection;
