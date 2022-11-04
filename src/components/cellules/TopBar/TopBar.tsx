import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const TopBar: FC = () => {
  const { t } = useTranslation()

  return (
    <header className="top-bar">
      <span className="top-bar_title">{t('appTitle')}</span>
    </header>
  )
}

export default TopBar
