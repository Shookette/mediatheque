import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useMedia } from '../hooks/media'

const Media: FC = () => {
  const { id } = useParams()
  const { media } = useMedia(id ?? '')

  return (
    <div className='media'>
      Media Detail
      titre : {media?.titre}
    </div>
  )
}

export default Media
