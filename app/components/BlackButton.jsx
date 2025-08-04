import React, { use, useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Button2 from './Button2';

export default function BlackButton() {
    const [loginModal, setLoginModal] = useState(false);

    const showLoginModal = () => {
        setLoginModal(loginModal => !loginModal);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg,setErrorMsg] = useState('');

    const login = async (e) => {
        e.preventDefault();  // Mencegah reload halaman saat form disubmit

        // Mengirim data ke API Node.js
        const response = await fetch('http://localhost:8000/field_data', {
            method: 'POST',  // Menggunakan metode POST untuk mengirim data
            headers: {
                'Content-Type': 'application/json',  // Memberitahu server bahwa body request berformat JSON
            },
            body: JSON.stringify({
                email,
                password
            }),  // Mengirim data email dan password dalam bentuk JSON
        });

        const data = await response.json();  // Mengambil respons dari server dan mengonversinya menjadi JSON

        if (data.success) {
            // Handle login success (redirect atau menampilkan pesan sukses)
            setErrorMsg('Login successful');
        } else {
            // Handle error jika kredensial salah
            setErrorMsg('Login failed', data.message);
        }
    }


    return (
        <div>
            <div 
                className="p-2.5 rounded-xl cursor-pointer bg-[var(--black)] text-[var(--light-yellow)] hover:text-[var(--black)] hover:bg-transparent border-2 border-[var(--black)]" 
                onClick={showLoginModal}
            >
                Masuk
            </div>
            {loginModal && (
                <div className="fixed flex flex-col gap-6 top-0 left-0 w-full h-full bg-[var(--light-yellow)] flex justify-center items-center text-[var(--dark-green)]">
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl md:text-3xl font-semibold text-center w-full'>Masuk ke Akun</h1>
                        <IoIosClose className='text-4xl md:text-5xl cursor-pointer absolute top-5 right-5' onClick={showLoginModal} />
                        <p className='text-sm md:text-base text-center'>
                            Belum punya akun ? <span className='underline font-semibold'>Daftar</span>
                        </p>
                        <div className='flex flex-col'>
                            <div>
                                <label className='text-start'>Email</label>
                                <input 
                                value={email} 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className='bg-[var(--light-green-1)] p-2 w-full rounded-xl' 
                                    required
                                />
                            </div>
                            <div>
                                <label >Password</label>
                                <input 
                                    value={password} 
                                    type="password" 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    className='bg-[var(--light-green-1)] p-2 w-full rounded-xl' 
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <Button2 text={"Masuk"} onClick={() => login()}/>
                </div>
            )}
        </div>
    );
}
