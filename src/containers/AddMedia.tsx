import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { setMedia } from '../services/mediaRepository'
import { Media } from '../types/mediaType'

interface Inputs {
  mediaName: string
}

const AddMedia: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const media: Media = {
      id: data.mediaName,
      titre: data.mediaName
    }

    console.log('setMedia::media::', media)

    await setMedia(media)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('mediaName')} />
      <input type="submit" />
    </form>
  )
}

export default AddMedia
