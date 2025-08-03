import React from 'react'
import Button from './Button1'

export default function RectangleBox({text}) {
  return (
    <div className='rectangle-box' >
        <p>{text}</p>
        <Button text={"lihat detail ladang"}></Button>
    </div>
  )
}
