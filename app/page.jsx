'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import WhiteButton from './components/WhiteButton';
import BlackButton from './components/BlackButton';

import Image from 'next/image';

export default function Home() {

  const router = useRouter(); 

  const handleClick = () => {
    router.push('/irigationSystem'); // Path ke page2.jsx
  };

  return (
    <div className="container md:py-30 md:px-25  bg-[var(--dark-green)] min-h-screen text-[var(--light-yellow)] overflow-hidden max-h-screen fixed">
      <div className='flex flex-col gap-4 justify-center items-start w-full z-10 md:w-[50%]'>
        <h1 className='text-2xl md:text-3xl font-semibold w-full'>Selamat datang di</h1>
        <Image src="/Grow.png" alt="irigasi" width={120} height={120} className="object-contain" />
        <p className='text-base md:text-lg'>Atur dan pantau ladangmu dengan mudah dan efisien secara digital</p>
      </div>
      <div className='flex flex-row gap-2 z-10'>
        <WhiteButton></WhiteButton>
        <BlackButton></BlackButton>
      </div>
      <Image src="/landingpage.png" alt="Grow" width={300} height={300} className="w-[150vw] h-[150vh] absolute bottom-0 left-0 animate-fadeIn opacity-0.7 md:w-[40vw] md:left-[60vw] md:animate-none" />
    </div>
  );
}

