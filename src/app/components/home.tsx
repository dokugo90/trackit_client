 

 import React from 'react'
import Navbar from './navbar'
import Map from './map';
import { useAppContext } from '../utils/context'
import { useMediaQuery } from 'react-responsive';
 
 function HomePage() {
  const { user, setUser } = useAppContext();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

   return (
     <>
      <Navbar isHomePage={true} />
      <section className='p-4'>
        <div className='flex justify-center h-screen w-full gap-4 flex-col md:flex-row'>
          <div className=' bg-white w-full md:w-[35%] float-left flex flex-col'>
          <div className='flex justify-center flex-col items-center'>
          <div className="relative h-10 w-full  shadow-lg rounded-full">
          <label className="sr-only" htmlFor="search"> Search </label>

          <input
            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm "
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
          </div>
          {/* TODO: Shipping details */}
          </div>
          </div>
          <div className=' bg-white w-full md:w-[65%] float-right flex'>
          <Map />
   </div>
        
        </div>
      </section>
     </>
   )
 }
 
 export default HomePage