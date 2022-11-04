import classNames from 'classnames'
import React, { FC } from 'react'
import defaultImage from '../../../assets/defaultImage.jpeg'
import './Image.scss'

interface ImageProps {
  src?: string
  className: string
  size: 'small' | 'normal' | 'large'
}

const Image: FC<ImageProps> = ({ src, size, className }) => {
  const componentClassNames = classNames(
    'image',
    `image--${size}`,
    className
  )
  const checkSrc = src !== '' ? src : defaultImage
  return (
    <div className={componentClassNames}>
      <img src={checkSrc} className='image_content' />
    </div>
  )
}

export default Image
