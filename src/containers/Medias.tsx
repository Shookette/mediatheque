import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useMedias } from '../hooks/medias'
import { Media } from '../types/mediaType'
import AddMedia from './AddMedia'

const Medias: FC = () => {
  const { medias } = useMedias()

  return (
    <div className='medias'>
      <div className='medias_action'>
        <AddMedia />
      </div>
      <div className='medias_content'>
        List of all media
        <ul>
        {medias.map(({ id, titre }: Media, index) => {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const link = `media/${id}`
          return (
            <li key={index}>
              <p>id : {id}</p>
              <Link to={link}><p>titre : {titre}</p></Link>
            </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default Medias
