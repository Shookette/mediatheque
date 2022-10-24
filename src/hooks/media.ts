import { useEffect, useState } from 'react'
import { Media } from '../types/mediaType'
import { getMediaByID } from './mediaRepository'

interface UseMedia {
  isLoading: boolean
  media: Media | null
}

export const useMedia = (id: string): UseMedia => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [media, setMedia] = useState<Media | null>(null)

  useEffect(() => {
    setIsLoading(true)
    getMediaByID(id).then((media: Media | null) => {
      setMedia(media)
      setIsLoading(false)
    }).catch((error) => {
      console.error(error)
      setIsLoading(false)
    })
  }, [id])

  return { isLoading, media }
}
