'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button2 from '../components/Button2';
import ScheduleBox from '../components/ScheduleBox';
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import Navbar from '../components/Navbar';

export default function page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); 
  }

  const [isOpen, setIsOpen] = useState(false);
  const chooseField = () => {
    setIsOpen(!isOpen);
  }

  const [value, setValue] =  useState("");
  const setChosenValue = (text) => {
    setValue(text);
    setIsOpen(false);
  }

    return (
        <div className='container md:py-30 md:px-25 border'>
            <Navbar />
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row justify-start items-end'>
                <Image src="/watering.png" width={65} height={65} alt="sistem irigasi"></Image>
                <h1 className='text-xl md:text-3xl font-semibold'>Rekomendasi Sistem Irigasi</h1>
              </div>
              <p className='text-sm md:text-base'>Yuk, prediksi kebutuhan air tanaman berdasarkan cuaca dan kelembapan tanah kamu 5 hari kedepan !</p>
            </div>
            <div className='w-full flex flex-col gap-10 md:flex-row'>
              
              <div className='box bg-[var(--light-green-1)] gap-4 px-4 flex-col text-[var(--dark-green)] w-full md:w-[40%]'>
                <div className='flex flex-row justify-start w-full items-center gap-2'>
                  <GoAlertFill className='text-base md:text-lg text-[var(--dark-green)] '/>
                  <p className='text-base md:text-lg font-semibold '>Peringatan !</p>
                </div>
                <ul className='list-disc w-[90%] space-y-2'>
                  <li className='w-full '><span className=' bg-[var(--dark-yellow)] px-2 rounded-sm'>Ladang padi 2 :</span> kelembapan tanah 20 % di bawah batas aman 60 %</li>
                  <li className='w-full '><span className=' bg-[var(--dark-yellow)] px-2 rounded-sm'>Ladang padi 3 :</span> kelembapan tanah 5 % di atas batas aman 60 %</li>
                </ul>
                
              </div>
              
              <div className='flex flex-col gap-2 w-full '>
                  <div className='flex flex-row bg-[var(--light-green-2)] p-2 rounded-xl  justify-between cursor-pointer w-[50%] md:w-[30%] gap-2 items-center' onClick={chooseField }>
                    <p>{value ? value : "Pilih Ladang"}</p>
                    <IoIosArrowDown/>
                  </div>
                  {isOpen && (<div className='flex flex-col bg-[var(--light-green-2)] rounded-xl cursor-pointer w-[50%] gap-2 md:max-w-[30%] absolute '>
                      <div className='hover:bg-[var(--medium-green)] hover:text-[var(--light-yellow)] p-2 rounded-t-xl' onClick={() => setChosenValue("ladang padi 1")}>
                          <p>ladang padi 1</p>
                      </div>
                      <div className='hover:bg-[var(--medium-green)] hover:text-[var(--light-yellow)] p-2 ' onClick={() => setChosenValue("ladang padi 2")}>
                          <p>ladang padi 2</p>
                      </div>
                      <div className='hover:bg-[var(--medium-green)] hover:text-[var(--light-yellow)] p-2 rounded-b-xl' onClick={() => setChosenValue("ladang padi 3")}>
                          <p>ladang padi 3</p>
                      </div>
                  </div>)}
                  
                  <ScheduleBox weather={"sunny"} day={"Senin"} date={"04-08-2025"}> </ScheduleBox>
                  <ScheduleBox weather={"windy"} day={"Selasa"} date={"05-08-2025"}></ScheduleBox>
                  <ScheduleBox weather={"normal"} day={"Rabu"} date={"06-08-2025"}></ScheduleBox>
                  <ScheduleBox weather={"rainy"} day={"Kamis"} date={"07-08-2025"}></ScheduleBox>
                  <ScheduleBox weather={"sunny"} day={"Jumat"} date={"08-08-2025"}></ScheduleBox>
              </div>

            </div>
            <Button2 text={"Kembali"} onClick={handleGoBack}></Button2>
        </div> 
    )


}
