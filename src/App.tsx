import React, { FC } from 'react'
import './App.scss'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Medias from './containers/Medias'
import Media from './containers/Media'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Medias />}/>
        <Route path='media/:id' element={<Media />}/>
      </Route>
    </Routes>
  )
}

export default App
