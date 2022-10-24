import React, { FC, ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  onClick?: () => void
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className='button'
      onClick={() => { void onClick }}
    >
      {children}
     </button>
  )
}
