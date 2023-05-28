"use client"
import React, { useState } from 'react';
import { useAppContext } from '../utils/context';
import VerticalDivider from './divider';
import { Dialog, DialogTitle } from '@mui/material';
import { NavBarProps } from '../interfaces/interfaceTypes';
function Navbar({ isHomePage }: NavBarProps) {
  const userContext = useAppContext();
  const [openNotifications, setOpenNotifications] = useState(false);

    return (
        <>
        {/* TODO: Install @mui */}
<Dialog onClose={() => {
       setOpenNotifications(false);
      }} open={openNotifications}>
        <DialogTitle className="bg-white">
          <h1 className='font-bold text-xl text-black'>Notifications</h1>
        </DialogTitle>
        <div className="w-[250px] h-[300px] bg-primary sm:w-[350px] p-4 ">
          <div id="usersList" className="flex flex-col justify-start p-1 overflow-x-hidden h-full overflow-y-auto">
            {
              
            }
          </div>
        </div>
      </Dialog>
<header aria-label="Page Header" className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex items-center justify-end gap-4">
      <div className="flex items-center gap-4">
        {/*<div className="relative">
          <label className="sr-only" htmlFor="search"> Search </label>

          <input
            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Sim Id"
          />

          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          </div>*/}

        

{/*<a
          href="#"
          className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
        >
          <h1 className=' font-bold'>Packages</h1>
        </a>

      <VerticalDivider height={24} />*/}

{/*<div
          
          className={` shrink-0 rounded-full ${isHomePage ? "bg-gray-400" : "bg-white"} p-2.5 text-gray-600 shadow-sm hover:text-gray-700 cursor-pointer flex justify-center items-center`}
        >
          <span className='w-full h-full flex items-center justify-center'>
          <i className='material-icons text-gray-500'>home</i>
          </span>
          </div>

    <VerticalDivider height={24} />*/}

        <div
          onClick={() => setOpenNotifications(true)}
          className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 cursor-pointer"
        >
          <span className="sr-only">Notifications</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
      </div>

      <VerticalDivider height={24} />

      <a href="#" className="block shrink-0">
        <span className="sr-only">Profile</span>
        <img
          alt="User Profile Picture"
          src={userContext.user.pfp}
          className="h-10 w-10 rounded-full object-cover"
        />
      </a>
    </div>

    <div className="mt-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Welcome Back, {userContext.user.firstName} {userContext.user.lastName[0]}!
      </h1>
    </div>
  </div>
</header>
        </>
  )
}

export default Navbar;