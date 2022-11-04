import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from '../NavBar/NavBar'
import NavBarItem from '../NavBarItem/NavBarItem'

const TopBar: FC = () => {
  const { t } = useTranslation()

  return (
    <header className="top-bar">
      <div className="top-bar_title">{t('appTitle')}</div>
      <NavBar>
        <NavBarItem link='/'>{t('navMedias')}</NavBarItem>
        <NavBarItem link='/account'>{t('navAccountSignIn')}</NavBarItem>
      </NavBar>
    </header>
  )
}

export default TopBar
