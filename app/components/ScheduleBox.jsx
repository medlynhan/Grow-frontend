import React from 'react'
import Button from './Button1'
import Image from 'next/image'


export default function RectangleBox({weather, day, date}) {
  
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'sunny':
        return "sunny"
      case 'windy':
        return "windy"
      case 'rainy':
        return "rainy"
      default:
        return "normal"
    }
  }
  
  const iconSrc = getWeatherIcon(weather)

  return (
    <div className='box text-xs md:text-sm gap-2 md:gap-6' >
      <div className='flex flex-row gap-2 border-r-1 px-2 md:gap-6 md:px-4'>
          <div >
            <Image src={`/${iconSrc}.png`} width={40} height={40} alt="cuaca"></Image>
            <p>22 °C</p>
          </div>
          <div className='flex flex-col '>
              <p className='font-semibold'>{day}</p>
              <p >{date}</p>
          </div>
        </div>
        <p >Prediksi kebutuhan air  : <span className='font-semibold '>8 liter/m2</span></p>
    </div>
  )
}
