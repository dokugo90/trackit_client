"use client";

import React, { FormEvent, useRef, useState } from 'react';
import SignInImage from "../../../public/assets/location-gif-optimized.gif";
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import { useRouter } from 'next/navigation';

function SignIn() {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  async function LogInToAccount(e: FormEvent) {
    e.preventDefault();
  
      const form = new FormData(formRef.current as HTMLFormElement | undefined)
  
      const email = form.get("email");
      const password = form.get("password")

      let navigate = false;
  
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API}sign_in`, { email: email, password: password })
        .then((response) => {
          if (response.data.token != null) {
            if (typeof window != "undefined") {
              localStorage.setItem("Trackit[3343]-token", response.data.token)
            }
            setMessage("Logging you in!")
            setOpen(true)
            navigate = true;
          } else {
            setMessage(response.data.message)
            setOpen(true)
          }
        }).finally(() => {
          if (navigate) {
            router.push("/")
          } else {
            return;
          }
        })
      
      } catch(err) {
        setMessage("There was an error.")
      setOpen(true)
      }
  
      
    }

    function handlePassword() {
      if (!passwordVisible) {
        setPasswordVisible(true)
      } else {
        setPasswordVisible(false);
      }
    }

  return (
    <>
     {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
<Snackbar
  open={open}
  className='shadow-lg shadow-gray-100'
  autoHideDuration={6000}
  onClose={() => {
    setOpen(false)
  }}
  >
    <Alert  severity="info">
    {message}
  </Alert>
    </Snackbar>
<section className="relative flex flex-wrap h-screen items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Sign into your account!</h1>

      <p className="mt-4 text-gray-500">
        Welcome back to Track It!
      </p>
    </div>

    <form action="" onSubmit={(e) => LogInToAccount(e)} ref={formRef} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            name="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            required
           title="Please enter a valid email address"
           pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
           minLength={5}
           maxLength={100}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            required
            minLength={8}
            maxLength={20}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
   title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one symbol."
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <i onClick={() => handlePassword()} className='material-icons text-gray-400 cursor-pointer select-none'>{passwordVisible ? "visibility_off" : "visibility"}</i>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <Link className="underline ml-1" href="/sign_up">Sign Up</Link>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div className="relative hidden h-64 w-full lg:h-full lg:w-1/2 lg:flex justify-center items-center">
  <div className='flex justify-center'>
    <Image className="w-[640px] h-[640px] mb-4 select-none" src={SignInImage} alt="My SVG File" width={640} height={640} />
    </div>
  </div>
</section>
    </>
  )
}

export default SignIn