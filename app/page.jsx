'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button1 from './components/Button1';
import Button2 from './components/Button2';

export default function Home() {

  const router = useRouter(); 

  const handleClick = () => {
    router.push('/irigationSystem'); // Path ke page2.jsx
  };

  return (
    <div className="container md:py-40 md:px-25">
      <h1 className='text-2xl md:text-3xl font-semibold'>"welcome !"</h1>
      <Button1 text={"lihat jadwal irigasi !"}  onClick={handleClick}/>
    </div>
  );
}

