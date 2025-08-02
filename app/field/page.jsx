'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';
import RectangleBox from '../components/RectangleBox';

export default function page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); 
  }
    return (
        <div className='container'>
            <div className='flex flex-row gap-2'>
              <RectangleBox text={"ladang padi 1"}></RectangleBox>
              <RectangleBox text={"ladang padi 2"}></RectangleBox>
              <RectangleBox text={"ladang padi 3"}></RectangleBox>
            </div>
            <Button text={"go back to the main page"} onClick={handleGoBack}></Button>
        </div>
    )


}
