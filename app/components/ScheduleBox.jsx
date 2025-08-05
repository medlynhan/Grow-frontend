import React from 'react'
import Button from './Button1'
import Image from 'next/image'
import { TbTemperature } from "react-icons/tb";
import { IoSunny } from "react-icons/io5";
import { FaCloudSun } from "react-icons/fa";
import { IoRainySharp } from "react-icons/io5";
import { RiCloudWindyFill } from "react-icons/ri";

export default function RectangleBox({weather, day, date}) {
  
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'sunny':
        return <IoSunny className="text-2xl md:text-3xl text-[var(--dark-yellow)]" />;
      case 'windy':
        return <RiCloudWindyFill className="text-2xl md:text-3xl text-blue-100" />;
      case 'rainy':
        return <IoRainySharp className="text-2xl md:text-3xl text-blue-100" />;
      case 'normal':
        return <FaCloudSun className="text-2xl md:text-3xl text-[var(--dark-yellow)]" />;
    }
  }
  
  const iconSrc = getWeatherIcon(weather)

  return (
    <div className='box text-xs md:text-sm gap-2 md:gap-6 w-full p-0 ' >
      <div className='grid grid-cols-6 md:grid-cols-7 gap-4 p-2 md:gap-6 w-full justify-center items-start border w-full'>
          <div className='flex flex-col col-span-1  w-full  h-full '>
            {getWeatherIcon(weather)}
            <p>{weather}</p>
          </div>
          <div className='flex flex-col border-r-2 col-span-1 h-full w-full '>
            <TbTemperature className='text-2xl md:text-3xl ' />
            <p>22C</p>
          </div>
          <div className='flex flex-col col-span-2  w-full  h-full '>
              <p className='font-semibold'>{day}</p>
              <p >{date}</p>
          </div>

          <div className='flex flex-col col-span-2 md:col-span-3   w-full h-full '>
            <p >Kebutuhan air tanaman :</p>
            <p className='text-sm font-semibold md:text-base'>8 liter /m2</p>
          </div>
        </div>

        

    </div>
  )
}
