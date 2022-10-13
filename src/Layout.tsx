import React, { FC, ReactNode } from 'react'
import TopBar from './components/cellules/TopBar/TopBar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
      <div className="layout">
          <TopBar />
          <main className='layout_wrapper'>
              {children}
          </main>
      </div>
  )
}

export default Layout
