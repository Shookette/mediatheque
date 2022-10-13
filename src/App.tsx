import React, { FC } from 'react'
import WithFirestore from './WithFirestore'

import Counter from './Counter'
import './App.css'
import Layout from './Layout'

const App: FC = () => {
  return (
    <WithFirestore>
      <Layout>
        <Counter></Counter>
      </Layout>
    </WithFirestore>
  )
}

export default App
