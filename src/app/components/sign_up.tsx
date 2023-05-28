"use client"
import React, { FormEvent, FormEventHandler, LegacyRef, useRef, useState } from 'react';
import Image from 'next/image';
import SignInImage from "../../../public/assets/location-gif-optimized.gif";
import Link from 'next/link';
import PhoneInputField from './phone_input';
import Register from '../handlers/register';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import { useRouter } from 'next/navigation';

function SignUp() {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const router = useRouter();

  async function CreateAccount(e: FormEvent) {
  e.preventDefault();

    const form = new FormData(formRef.current as HTMLFormElement | undefined)

    const email = form.get("email");
    const firstName = form.get("firstName");
    const lastName = form.get("lastName")
    const password = form.get("password")
    const confirmPassword = form.get("confirmPassword");
    
    let navigate = false;


    if (password == confirmPassword) {
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API}sign_up`, { email: email, firstName: firstName, lastName: lastName, password: password })
        .then((response) => {
          if (response.data == "Successfully created your account!") {
            navigate = true;
          };
        setMessage(response.data);
        setOpen(true);
        }).finally(() => {
          if (navigate) {
            router.push("/sign_in");
          } else {
            return;
          }
        })
      } catch(err) {
        setMessage("There was an error.");
      setOpen(true);
      }
    } else {
      setMessage("Passwords do not match. Please try again.")
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

  function handleConfirmPassword() {
    if (!confirmPasswordVisible) {
      setConfirmPasswordVisible(true)
    } else {
      setConfirmPasswordVisible(false);
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
     <h1 className="text-2xl font-bold sm:text-3xl">Create your account!</h1>

     <p className="mt-4 text-gray-500">
       Welcome to Track It!
     </p>
   </div>

   <form action="" ref={formRef} onSubmit={(e) => CreateAccount(e)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div className='flex justify-center items-center gap-3'>
   <div>
       <label htmlFor="First name" className="sr-only">First Name</label>

       <div className="relative">
       <input
  type="text"
  name="firstName"
  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
  placeholder="Enter First name"
  required
  pattern="[A-Za-z\s]+"
  title="Letters only"
  minLength={2}
  maxLength={50}
/>


         <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
           <i className='material-icons text-gray-400'>badge</i>
         </span>
       </div>
     </div>

     <div>
       <label htmlFor="Last name" className="sr-only">Last Name</label>

       <div className="relative">
         <input
         name='lastName'
           type="text"
           className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
           placeholder="Enter Last name"
           required
  pattern="[A-Za-z\s]+"
  title="Letters only"
  minLength={2}
  maxLength={50}
         />

         <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
         <i className='material-icons text-gray-400'>badge</i>
         </span>
       </div>
     </div>
     </div>

     <div>
       <label htmlFor="email" className="sr-only">Email</label>

       <div className="relative">
         <input
           type="email"
           name='email'
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


    {/*<div className="w-full">
    <PhoneInputField />
</div>*/}

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

     <div>
       <label htmlFor="password" className="sr-only">Confirm Password</label>

       <div className="relative">
         <input
           type={confirmPasswordVisible ? "text" : "password"}
           name='confirmPassword'
           className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
           placeholder="Confirm password"
           required
           minLength={8}
           maxLength={20}
           pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
  title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one symbol."
         />

         <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
         <i onClick={() => handleConfirmPassword()} className='material-icons text-gray-400 cursor-pointer select-none'>{confirmPasswordVisible ? "visibility_off" : "visibility"}</i>
         </span>
       </div>
     </div>

     <div className="flex items-center justify-between">
       <p className="text-sm text-gray-500">
         Already have an account?
         <Link className="underline ml-1" href="/sign_in">Sign In</Link>
       </p>

       <button
         type="submit"
         className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
       >
         Create account
       </button>
     </div>
   </form>
 </div>

 <div className="relative hidden h-64 w-full lg:h-full lg:w-1/2 lg:flex justify-center items-center">
 <div className='flex justify-center'>
  {/* TODO: Compress GIF */}
   <Image className="w-[640px] h-[640px] mb-4 select-none" src={SignInImage} alt="My SVG File" width={640} height={640} />
   </div>
 </div>
</section>
   </>
  )
}

export default SignUp