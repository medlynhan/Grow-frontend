import React from 'react'

export default function Button2({text,onClick}) {
  return (
    <div className={'button2 hover:bg-transparent border-2 border-[var(--medium-green)] hover:text-[var(--dark-green)]'} onClick={onClick}>{text}</div>
  )
}
