import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/cellules/TopBar/TopBar'

const Layout: FC = () => {
  return (
    <div className="layout">
      <TopBar />
      <main className='layout_wrapper'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
