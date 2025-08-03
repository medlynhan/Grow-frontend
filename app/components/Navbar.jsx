import React from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter(); 
  
  const goToHomePage = () => {
    router.push('/');
  }

  return (
    <div className='navbar md:text-3xl md:px-25' >
        <Image src="/Grow.png" alt="Logo" width={80} height={40} className='cursor-pointer' onClick={goToHomePage}/>
        <div className='flex flex-row gap-6'>
          <CgProfile />
          <IoMenuOutline />
        </div>

    </div>
  )
}
