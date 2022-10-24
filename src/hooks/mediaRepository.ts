import { getFirestore, doc, getDoc, setDoc, DocumentReference, DocumentData, getDocs, collection, CollectionReference, QueryDocumentSnapshot, QuerySnapshot, DocumentSnapshot, Firestore } from 'firebase/firestore'
import { Media } from '../types/mediaType'

const getDocRef = (collectionName: string, id: string): DocumentReference<DocumentData> => {
  const db = getFirestore()
  return doc(db, collectionName, id)
}

const getCollectionRef = (collectionName: string): CollectionReference<DocumentData> => {
  const db: Firestore = getFirestore()
  return collection(db, collectionName)
}

const getMedias = async (): Promise<Media[]> => {
  const result: QuerySnapshot<DocumentData> = await getDocs(getCollectionRef('medias'))

  const arrayMedia: Media[] = []

  result.forEach((media: QueryDocumentSnapshot<DocumentData>) => {
    arrayMedia.push(media.data() as Media)
  })
  return arrayMedia
}

const getMediaByID = async (id: string): Promise<Media | null> => {
  const result: DocumentSnapshot<DocumentData> = await getDoc(getDocRef('medias', id))
  if (result.exists()) {
    return result.data() as Media
  } else {
    return null
  }
}

const setMedia = async (media: Media): Promise<void> => {
  await setDoc(doc(getCollectionRef('medias'), media.id as string), media)
}

export {
  getMedias,
  getMediaByID,
  setMedia
}
