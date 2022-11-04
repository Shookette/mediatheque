import React, { FC, ReactNode } from 'react'

interface NavBarProps {
  children: ReactNode
}

const NavBar: FC<NavBarProps> = ({ children }) => <nav className='nav-bar'>{children}</nav>

export default NavBar
