import { useEffect, useState } from 'react'
import { Media } from '../types/mediaType'
import { getMedias } from '../services/mediaRepository'

interface UseMedias {
  isLoading: boolean
  medias: Media[]
}

export const useMedias = (): UseMedias => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [medias, setMedias] = useState<Media[]>([])

  useEffect(() => {
    setIsLoading(true)
    getMedias().then((medias: Media[]) => {
      setMedias(medias)
      setIsLoading(false)
    }).catch((error) => {
      console.error(error)
      setIsLoading(false)
    })
  }, [])

  return { isLoading, medias }
}
