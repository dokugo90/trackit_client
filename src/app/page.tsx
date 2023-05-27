"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import GettingStarted from './components/getting_started'
import SignInPage from '@/app/sign_in/page'
import HomePage from './components/home'
import AppContext from './utils/providers'
import { useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import { useRouter } from "next/navigation";
import { MongoClient } from "mongodb";
import getUsers from './handlers/getUser'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ params }: { params: any }) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isAuthorized, setAuthorized] = useState(false);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      let token = null;

      if (typeof window !== 'undefined') {
        token = localStorage.getItem('Trackit[3343]-token');
      }

      const getUser = axios.get(`${process.env.NEXT_PUBLIC_API}user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Promise.all([
        getUser, 
      ])
      .then(([userResponse]) => {
        setUser(userResponse.data);
        setAuthorized(true);
      })
      .catch((error) => {
        console.error(error);
        router.push('/sign_in');
      });

    }

    return () => {
      ignore = true;
    }
  }, [])

    const contextvalues = {
    user, 
    setUser
  };


  if (!isAuthorized) return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="custom-loader"></div>
    </div>
  )
  return (
   <>
   <AppContext.Provider value={contextvalues}>
   <HomePage />
   </AppContext.Provider>
   </>
  )
}