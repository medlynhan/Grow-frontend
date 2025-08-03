'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import RectangleBox from '../components/RectangleBox';

export default function page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); 
  }
    return (
        <div className='container md:py-40 md:px-25'>
            <div className='flex flex-row gap-2'>
              <RectangleBox text={"ladang padi 1"}></RectangleBox>
              <RectangleBox text={"ladang padi 2"}></RectangleBox>
              <RectangleBox text={"ladang padi 3"}></RectangleBox>
            </div>
            <Button2 text={"go back"} onClick={handleGoBack}></Button2>
        </div>
    )


}
