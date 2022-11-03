import initFirebase from '../utils/firebaseLoader'
import React, { ReactNode, FC } from 'react'

interface Props { children: ReactNode }

const WithFirestore: FC<Props> = ({ children }) => {
  initFirebase()

  return (
     <>{children}</>
  )
}

export default WithFirestore
