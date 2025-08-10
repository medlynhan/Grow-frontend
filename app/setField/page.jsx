'use client'
import React from 'react'
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button2 from '../components/Button2';
import Button1 from '../components/Button1';
import { supabase } from '../lib/supabase';
import Cookies from 'js-cookie';
import { IoIosArrowDown } from "react-icons/io";

export default function page() {
    const router = useRouter();
    
    //ambil data dr session
    const [email, setEmail] = useState(null); 

    const getCookies = () => {
        const storedEmail = Cookies.get('session');
        if (storedEmail) {
        setEmail(storedEmail); 
        console.log("Stored email from cookies:", storedEmail); 
        }
    };

    useEffect(() => {
        getCookies();
    }, []); 


    //logika selected Plant 
    const [selectedPlant, setSelectedPlant] = useState('Padi');
    const [ChoosePlantDdl, setChoosePlantDdl] = useState(false);


    const  selectPlant = (plant) => {
        setSelectedPlant(plant);
        console.log( "selected Plant :", selectedPlant);
        setChoosePlantDdl(false);   
    }

    //logika selected FieldType
    const [selectedFieldType, setSelectedFieldType] = useState('Aluvial');
    const [ChooseFieldTypeDdl, setChooseFieldTypeDdl] = useState(false);


    const selectFieldType = (field_type) => {
        setSelectedFieldType (field_type);
        console.log( "selected Field Type :", selectedFieldType);
        setChooseFieldTypeDdl(false);   
    } 



    //logika setLatitude, setLongtitude
    const [latitude1, setLatitude1] = useState('');
    const [longtitude1, setLongtitude1] = useState('');
    const [latitude2, setLatitude2] = useState('');
    const [longtitude2, setLongtitude2] = useState('');
    const [latitud3, setLatitude3] = useState('');
    const [longtitude3, setLongtitude3] = useState('');
    const [latitude4, setLatitude4] = useState('');
    const [longtitude4, setLongtitude4] = useState('');

    //simpen data ke supabase
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [errorMsg, setErrorMsg] = useState('error');
    const [koordinat, setKoordinat] = useState('');

    const Batal = () => {
        setNama('');
        setSelectedFieldType('Aluvial');
        setSelectedPlant('Padi');
        setAlamat('');
        setEmail('');
        setEmailCadangan('');
        setErrorMsg('');
    }

    const Simpan =async () => {
        
        if (!nama || !jenisTanah || !jenisTanaman || !alamat ) {
            setErrorMsg("Data tidak boleh kosong");
            return;
        }


        const { data: insertedData, error: insertError } = await supabase
            .from('field_data')
            .insert([{ user_email:email, field_name: nama, soil_type: jenisTanah, crop_type: jenisTanaman}])
            .single();

        if (insertError) {
            console.error('Sign up failed:', insertError.message);
            setErrorMsg("Gagal menyimpan data");
        } else {
            router.push('/irigationSystem');
        }

    }

    


  
    return (
    <div className="container md:p-25  border">
      <div className="flex flex-col gap-6 w-full border">
        <h1 className="text-xl md:text-3xl font-semibold w-full text-[var(--dark-green)]">Atur Ladangmu</h1>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            {/* Kiri */}
            <div className="flex flex-col gap-6 w-full border">
                <div className="w-full xl:max-w-[70%]">
                <label htmlFor="nama" className="block text-left mb-1">Nama</label>
                <input
                    id="nama"
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                    required
                />
                </div>

                <div className="w-full xl:max-w-[70%]">
                    <label htmlFor="alamat" className="block text-left mb-1">Jenis Tanah</label>
                    <div className='relative border-2 border-[var(--medium-green)] p-2 w-full rounded-xl flex flex-col gap-4 cursor-pointer'> 
                        <div className='flex flex-row w-full justify-between items-center  rounded-xl' onClick={() => setChooseFieldTypeDdl(true)}>
                            <p>{selectedFieldType ? selectedFieldType : ""}</p>
                            <IoIosArrowDown />
                        </div>
                        
                        {ChooseFieldTypeDdl && (
                            <div className='absolute z-20 left-0 top-0 bg-[var(--light-yellow)] border-2 border-[var(--medium-green)] rounded-xl cursor-pointer w-full gap-6 shadow'>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer   rounded-t-xl" onClick={() => selectFieldType("Aluvial")} >
                                    <p>Aluvial</p>
                                </div>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer  " onClick={() => selectFieldType("Latosol")} >
                                    <p>Latosol</p>
                                </div>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer  " onClick={() => selectFieldType("Liat")} >
                                    <p>Liat</p>
                                </div>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer   rounded-b-xl" onClick={() => selectFieldType("Pasir")} >
                                    <p>Pasir</p>
                                </div>
                            </div>
                        )}
                        

                    </div>
                </div>

                <div className="w-full xl:max-w-[70%]">
                    <label htmlFor="alamat" className="block text-left mb-1">Jenis Tanaman</label>
                    <div className='relative border-2 border-[var(--medium-green)] p-2 w-full rounded-xl flex flex-col gap-4 cursor-pointer'> 
                        <div className='flex flex-row w-full justify-between items-center  rounded-xl' onClick={() => setChoosePlantDdl(true)}>
                            <p>{selectedPlant ? selectedPlant : ""}</p>
                            <IoIosArrowDown />
                        </div>
                        
                        {ChoosePlantDdl && (
                            <div className='absolute  z-20 left-0 top-0 bg-[var(--light-yellow)] border-2 border-[var(--medium-green)] rounded-xl cursor-pointer w-full gap-6 shadow'>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer   rounded-t-xl" onClick={() => selectPlant("Padi")} >
                                    <p>Padi</p>
                                </div>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer  " onClick={() => selectPlant("Jagung")} >
                                    <p>Jagung</p>
                                </div>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer  " onClick={() => selectPlant("Tomat")} >
                                    <p>Tomat</p>
                                </div>
                                <div className="hover:bg-[var(--light-green-1)] p-2 cursor-pointer   rounded-b-xl" onClick={() => selectPlant("Kubis")} >
                                    <p>Kubis</p>
                                </div>
                            </div>
                        )}
                        

                    </div>
                </div>

                <div className="w-full xl:max-w-[70%]">
                <label htmlFor="alamat" className="block text-left mb-1">Alamat</label>
                <input
                    id="alamat"
                    type="text"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                    required
                />
                </div>
            </div>

            {/* Kanan */}
            <div className="grid grid-cols-4 gap-6 w-full border items-end border">
                {/* Latitude longtitude */}
                <div className="flex flex-col gap-6 w-full border items-end border h-full">
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Latitude 1</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={latitude1}
                            onChange={(e) => setLatitude1(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Latitude 2</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={latitude2}
                            onChange={(e) => setLatitude2(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Latitude 3</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={latitude2}
                            onChange={(e) => setLatitude3(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Latitude 4</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={latitude2}
                            onChange={(e) => setLatitude4(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full border items-end border h-full">
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Longtitude 1</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={longtitude1}
                            onChange={(e) => setLongtitude1(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Longtitude 2</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={longtitude2}
                            onChange={(e) => setLongtitude2(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Longtitude 3</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={longtitude3}
                            onChange={(e) => setLongtitude3(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-left mb-1">Longtitude 4</label>
                        <input
                            id="koordinat"
                            type="text"
                            value={longtitude4}
                            onChange={(e) => setLongtitude4(e.target.value)}
                            className="bg-[var(--light-green-1)] p-2 w-full rounded-xl"
                            required
                        />
                    </div>
                </div>
 
            </div>
        </div>
        <div className="xl:col-span-2 flex flex-col items-center gap-3">
            {errorMsg && (
              <p className="text-[var(--red)] text-sm">{errorMsg}</p>
            )}
            <div className="flex justify-center gap-6">
                <Button1 text={"Batal"} onClick={Batal}/>
                <Button2 text={"Simpan"} onClick={Simpan}/>
            </div>
        </div>
        

      </div>
    </div>
  )
}
