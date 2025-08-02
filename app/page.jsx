'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './components/Button';

export default function Home() {

  const router = useRouter(); 

  const handleClick = () => {
    router.push('/page2'); // Path ke page2.jsx
  };

  return (
    <div className="container">
      <h1>"welcome !"</h1>
      <Button text={"click here"} onClick={handleClick}/>
    </div>
  );
}

