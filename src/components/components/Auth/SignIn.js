'use client';
import Head from "next/head";
import HeroSection from "src/components/components/HeroSection";
// import Navbar from "src/components/components/Navbar";
import React from "react";
import { useState } from 'react';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth, VIEWS } from '../../../../src/components/components/AuthProvider';
import supabase from 'src/lib/supabase-browser';
import { FaFacebook, FaLinkedinIn , FaGoogle, FaRegEnvelope } from "react-icons/fa";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignIn = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }
  
  return (
    <div className=" min-h-screen flex felx-col justify-center items-center py-2">

      <main className='flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8 text-center'>
        <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl">
          <div className='w-full sm:w-1/2 p-5'>
           <div className="text-left font-bold">
            Wander<span className="text-blue-500">Sub</span>
           </div>
           <div className="py-10">
             {/* <h2 className="text-3xl font-bold mb-2">SignIn to the account</h2>
             <div className="border-2 w-10 border-black inline-block mb-2"> 
             </div>
             <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebook className="text-sn"/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sn"/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sn"/>
              </a>
             </div>
             <p className="text-gray-400 my-3">or use your email account</p>
             <div className="flex-felx-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center ">
                <FaRegEnvelope className="text-gray-400 m-2"/>
                 <input type="email" name="email" placeholder="jane@acme.com" className="bg-gray-100 outline-none text-sm-felx-1"/>
              </div>
               </div>
           </div> */}
           <h2 className="text-3xl font-bold mb-2">Sign In</h2>
           
             <div className="flex justify-center my-0.5">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebook className="text-sn"/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sn"/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sn"/>
              </a>
             </div>
             <p className="text-gray-400 my-3">or use your email account</p>
             <div className="flex felx-col items-center justify-center">
              <div className="bg-white w-64 p-2 flex items-center ">
              <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">

            <label htmlFor="email">Email</label>
            
            <Field
              className={cn('input', errors.email && touched.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}

            <label htmlFor="email">Password</label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}
 <div className="flex justify-between w-64 mb-5">
            <label className="flex items-center text-xs"><input type="checkbox" name="Remember" className="mr-1"></input>
             Remember me
            </label>

          </div>
            <button
              className="link w-full text-black"
              type="button"
              onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
            >
              Forgot your password?
            </button>

            <button className="border-2 border-black text-black rounded-full px-20 py-4 inline-block font-semibold hover:bg-blue-200 hover:text-black justify-center items-center mx-4" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
              </div>
               </div>
      
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
            </div>
            </div>
          <div className="hidden sm:block sm:w-1/2  bg-signup  text-black rounded-tr-2xl rounded-br-2xl py-10 px-6">
           <h2 className="text-3xl text-white font-bold mb-2">Hello,User!</h2>
           <div className="border-2 w-10 border-black inline-block mb-2"> </div>
           <p className=" text-white mb-10">Fill some personal information and start your journey with us!</p>
          
           {/* <button
        className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-200 hover:text-black"
        type="button"
       
        onClick={() => setView(VIEWS.SIGN_UP)}
      >
         Sign Up.
      </button> */}
       <a href="/auth/signup" className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-200 hover:text-black">
            SignUp
            </a>
         
            </div>
          {/* <h2 className="w-full text-center">Sign In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            <label htmlFor="email">Email</label>
            <Field
              className={cn('input', errors.email && touched.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}

            <label htmlFor="email">Password</label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}

            <button
              className="link w-full"
              type="button"
              onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
            >
              Forgot your password?
            </button>

            <button className="button-inverse w-full" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      <button
        className="link w-full"
        type="button"
        onClick={() => setView(VIEWS.SIGN_UP)}
      >
        Don&apos;t have an account? Sign Up.
      </button> */}
        </div>
      </main>
    </div>
  );
};

export default SignIn;