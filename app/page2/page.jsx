'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

export default function page() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Memanggil API dari backend Node.js
    fetch('http://localhost:8000/field_data')
      .then((response) => response.json())
      .then((data) => {
        // Memeriksa apakah data ada dan kemudian memprosesnya
        if (data && data.length > 0) {
          // Ambil data pertama dan tampilkan crop_type
          setMessage(data.map(item => item.crop_type).join(', '));  // Menampilkan crop_type sebagai string yang dipisahkan koma
        } else {
          setMessage('No data available');
        }
      })
      .catch((error) => console.error('Error:', error));
  }, [])


  const handleGoBack = () => {
    router.push('/'); // Path ke page2.jsx
  }

    return (
        <div className='container'>
            <h1>{message ? message : "Loading..."}</h1>
            <Button text={"go back"} onClick={handleGoBack}></Button>
        </div>
  )
}
