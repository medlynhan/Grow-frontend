import React from 'react'

export default function Button({text, onClick}) {
  return (
    <div className="button hover:bg-green-200" onClick={onClick}>{text}</div>
  )
}
