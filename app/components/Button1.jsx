import React from 'react'

export default function Button({text, onClick}) {
  return (
    <div className="button1 hover:bg-transparent border-2 border-[var(--light-green-1)]" onClick={onClick}>{text}</div>
  )
}
