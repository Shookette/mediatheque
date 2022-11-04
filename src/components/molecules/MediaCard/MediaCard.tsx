import React, { FC } from 'react'
import Image from '../../atoms/Image/Image'
import './MediaCard.scss'

interface MediaCardProps {
  titre: string
  sousTitre: string
  src: string
}

const MediaCard: FC<MediaCardProps> = ({ titre, sousTitre, src }) => {
  return (
    <div className='mediaCard'>
      <Image src={src} size='normal' className='mediaCard_image' />
      <div className='mediaCard_information'>
        <div className='mediaCard_title'>{titre}</div>
        <div className='mediaCard_subTitle'>{sousTitre}</div>
      </div>
    </div>
  )
}

export default MediaCard
