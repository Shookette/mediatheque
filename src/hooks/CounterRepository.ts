import { getFirestore, doc, getDoc, setDoc, DocumentReference, DocumentData } from 'firebase/firestore'

const getDocRef = (id: string = 'counter'): DocumentReference<DocumentData> => {
  const db = getFirestore()
  return doc(db, 'counters', id)
}

const getCounter = async (): Promise<number> => {
  const result = await getDoc(getDocRef())

  if (result.exists()) {
    return result.data().value
  } else {
    return 0
  }
}

const increaseCounter = async (): Promise<number> => {
  const updatedCounter: number = await getCounter() + 1
  await setDoc(getDocRef(), { value: updatedCounter })

  return updatedCounter
}

export {
  getCounter,
  increaseCounter
}
