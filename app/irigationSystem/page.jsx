'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button2 from '../components/Button2';
import ScheduleBox from '../components/ScheduleBox';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import Navbar from '../components/Navbar';
import { supabase } from '../lib/supabase';
import Cookies from 'js-cookie';
import { GiWateringCan } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [fields, setFields] = useState([]); // array for field names
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(""); // for selected field value
  const [errorMsg, setErrorMsg] = useState("");

  const getCookies = () => {
    const storedEmail = Cookies.get('session');
    if (storedEmail) {
      setEmail(storedEmail); // Set email to state if available
      console.log("Stored email from cookies:", storedEmail); // Debugging cookies
    }
  };

  const handleGoBack = () => {
    router.push('/'); 
  };

  const chooseField = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
    console.log("Dropdown is now", isOpen ? "opened" : "closed"); // Debugging dropdown visibility
  };

  const setChosenValue = (fieldName) => {
    console.log("Chosen field:", fieldName); // Debugging the chosen field
    setValue(fieldName); // Update selected field value
    setIsOpen(false); // Close dropdown after selection
  };

  const fetchFieldData = async () => {
    if (email) {
      console.log("email",email);
      // Fetching field data based on the user's email
      const { data: fieldsData, error } = await supabase
        .from('field_data')
        .select('*') // Fetch all columns
        .eq('user_email', email); // Filter by user email

      if (error) {
        console.error('Error fetching field data:', error.message);
        setErrorMsg('Gagal mengambil data ladang');
      } else {
        console.log('Fetched field data:', fieldsData); // Debugging the fetched data
        setFields(fieldsData); // Update the state with the fetched data
        setValue(fieldsData[0]['field-name']); 
      }
    }
  };

  useEffect(() => {
    getCookies();
  }, []); 

  useEffect(() => {
    if (email) {
      fetchFieldData();  // Only call fetchFieldData when email is set
    }
  }, [email]); // Dependency on email

  return (
    <div className='container md:py-30 md:px-25 border'>
      <Navbar />
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row justify-start items-center gap-2'>
          <GiWateringCan className='text-3xl md:text-5xl h-full '/>
          <h1 className='text-xl md:text-3xl font-semibold  h-full '>Rekomendasi Sistem Irigasi</h1>
        </div>
        <p className='text-sm md:text-base'>Berikut prediksi kebutuhan air tanaman kamu 5 hari kedepan !</p>
      </div>

      <div className='w-full flex flex-col gap-10 md:flex-row w-full'>
        <div className='flex-col flex w-full borderb gap-4'>
        <div className='w-full flex flex-col '>
            <div className='w-full'>
              <div className='flex flex-row border-2 border-[var(--medium-green)] p-2 rounded-xl justify-between cursor-pointer w-[50%] md:w-[40%] gap-2 items-center' onClick={chooseField}>
                <p>{value ? value : "Pilih Ladang"}</p>
                <IoIosArrowDown />
              </div>
            </div>
            <div className='w-full'>
              {isOpen && (
              <div className='absolute bg-[var(--light-yellow)] border-2 border-[var(--medium-green)] rounded-xl cursor-pointer w-[50%] gap-6 md:max-w-[30%] shadow'>
                {fields.length > 0 ? (
                  fields.map((field, index) => (
                    <div key={index} className={`hover:bg-[var(--light-green-1)] p-2 cursor-pointer ${index === 0 ? 'rounded-t-xl' : index === fields.length - 1 ? 'rounded-b-xl' : ''}`} onClick={() => setChosenValue(field['field-name'])} >
                      <p>{field['field-name']}</p>
                    </div>
                  ))
                ) : (
                  <p className='p-2'>Belum ada ladang</p>
                )}
              </div>
              )}
            </div>
        </div>
        
        
        <div className='box bg-[var(--light-green-1)] gap-4 px-4 flex-col text-[var(--dark-green)]  w-full'>
          <div className='flex flex-row justify-start w-full items-center gap-2'>
              <FaBell className='text-base md:text-lg text-[var(--dark-green)]' />
              <p className='text-base md:text-lg font-semibold'>Notifikasi</p>
          </div>
            <ul className='list-disc w-[90%] space-y-2'>
              <li className='w-full font-semibold'> Kelembapan tanah 5% di bawah batas aman 60 %, perhatikan sistem irigasi !</li>
            </ul>
        </div>


        <div className='box grid-cols-3 bg-transparent p-0 gap-4 text-[var(--dark-green)] w-full '>
         
          <div className='w-full h-[14em] col-span-2  overflow-hidden '>
            <Image src={'/landingpage.png'} width={200} height={200} className='object-cover w-full h-full rounded-xl'></Image>
          </div>
          
          <div className='border-2 h-[14em]  border-[var(--medium-green)] rounded-xl col-span-1'>
            <div className='w-full p-2'>
                <p className='text-xs md:text-sm'>Status tanah :</p>
                <p className='text-sm md:text-lg font-semibold'>Kering</p>
            </div>
            <div className='w-full p-2'>
                <p className=''>Persentase kelembapan :</p>
                <p className='text-sm md:text-lg font-semibold'>32%</p>
            </div>
          </div>

        </div>


      </div>
        
        



        <div className='flex flex-col gap-2 w-full'>

          <ScheduleBox weather={"sunny"} day={"Senin"} date={"04-08-2025"} />
          <ScheduleBox weather={"windy"} day={"Selasa"} date={"05-08-2025"} />
          <ScheduleBox weather={"normal"} day={"Rabu"} date={"06-08-2025"} />
          <ScheduleBox weather={"rainy"} day={"Kamis"} date={"07-08-2025"} />
          <ScheduleBox weather={"sunny"} day={"Jumat"} date={"08-08-2025"} />
        </div>
      </div>

      <Button2 text={"Kembali"} onClick={handleGoBack} />
    </div>
  );
}
