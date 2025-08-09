'use client'
import React from 'react'
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button2 from '../components/Button2';
import Button1 from '../components/Button1';
import { supabase } from '../lib/supabase';
import Cookies from 'js-cookie';

export default function page() {
  return (
    <div className='container md:py-30 md:px-25  border'>
        <div className='flex flex-col gap-4 w-full xl:h-[80vh] border'>
            <h1 className='text-xl md:text-3xl font-semibold w-full text-[var(--dark-green)] border'>Atur Ladangmu</h1>
            <div className='flex flex-row justify-between items-center border '>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <label className='text-start'>Email</label>
                        <input 
                            value=" " 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='bg-[var(--light-green-1)] p-2 w-full rounded-xl' 
                            required
                        />
                    </div>
                    <div>
                        <label className='text-start'>Email</label>
                        <input 
                            value=" " 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='bg-[var(--light-green-1)] p-2 w-full rounded-xl' 
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <label className='text-start'>Email</label>
                        <input 
                            value=" " 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='bg-[var(--light-green-1)] p-2 w-full rounded-xl' 
                            required
                        />
                    </div>
                    <div>
                        <label className='text-start'>Email</label>
                        <input 
                            value=" " 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='bg-[var(--light-green-1)] p-2 w-full rounded-xl' 
                            required
                        />
                    </div>
                </div>
                
            </div>
            <div className='flex w-full border justify-center'>
                <div className='border grid grid-cols-2 place-items-center gap-10'>
                    <Button1 text={"Batal"} onClick={""} style={""}/>
                    <Button2 text={"Simpan"} onClick={""} style={""}/>
                </div>
            </div>
        </div>


        
    </div>
  )
}
