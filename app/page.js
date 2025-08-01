'use client';
import { useEffect, useState } from 'react';

export default function Home() {
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
  }, []);



  return (
    <div>
      <h1>{message ? message : 'Loading...'}</h1>
    </div>
  );
}

