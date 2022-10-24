import React, { ChangeEvent, FC, useState } from 'react'
import { setMedia } from '../hooks/mediaRepository'
import { Media } from '../types/mediaType'

const AddMedia: FC = () => {
  const [mediaName, setMediaName] = useState<string>('')

  const addMedia: (form: SubmitEvent) => Promise<void> = async (form: SubmitEvent) => {
    const media: Media = {
      id: mediaName,
      titre: mediaName
    }

    await setMedia(media)
  }

  return (
    <form onSubmit={() => addMedia}>
      <label>media name:</label>
      <input type="string" value={mediaName} onChange={(changeEvent: ChangeEvent<HTMLInputElement>) => setMediaName(changeEvent.target.value)} />
      <input type="submit" value="submit" />
    </form>
  )
}

export default AddMedia
