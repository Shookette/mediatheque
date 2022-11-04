import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface NavBarItemProps {
  children: ReactNode
  link: string
  icon?: string
  active?: boolean
}

const NavBarItem: FC<NavBarItemProps> = ({ children, link, icon, active }) => {
  const componentClassNames = classNames('nav-bar_button', {
    'nav-bar_button--active': active
  })

  return (
    <NavLink
      to={link}
      type='button'
      className={componentClassNames}
    >
      {children}
    </NavLink>
  )
}

export default NavBarItem
