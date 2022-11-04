import React, { FC } from 'react'
import MediaCard from '../../components/molecules/MediaCard/MediaCard'
import { useMedias } from '../../hooks/medias'
import { Media } from '../../types/mediaType'
import AddMedia from '../AddMedia'
import './Medias.scss'

const Medias: FC = () => {
  const { medias } = useMedias()

  return (
    <div className='medias'>
      <div className='medias_action'>
        <AddMedia />
      </div>
      List of all media
      <div className='medias_content'>
        {medias.map(({ id, titre }: Media, index) =>
          <MediaCard titre={titre} sousTitre='' src='' key={index}/>
        )}
      </div>
    </div>
  )
}

export default Medias
