import React, { FC } from 'react'
import WithFirestore from './WithFirestore'

import Counter from './containers/Counter'
import './App.scss'
import Layout from './Layout'
import AddMedia from './containers/AddMedia'

const App: FC = () => {
  return (
    <WithFirestore>
      <Layout>
        <div>
          <Counter />
          <AddMedia />
        </div>
      </Layout>
    </WithFirestore>
  )
}

export default App
