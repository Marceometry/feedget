import { useState } from 'react'
import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { Loading } from '@/components'

type Props = {
  disabled?: boolean
  screenshot: string | null
  onScreenshot: (screenshot: string | null) => void
}

export const ScreenshotButton = ({
  screenshot,
  onScreenshot,
  disabled,
}: Props) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onScreenshot(base64Image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors disabled disabled:hover:text-zinc-400'
        style={{ backgroundImage: `url(${screenshot})` }}
        onClick={() => onScreenshot(null)}
        disabled={disabled}
      >
        <Trash weight='fill' />
      </button>
    )
  }

  return (
    <button
      type='button'
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus disabled disabled:hover:bg-zinc-800'
      onClick={handleScreenshot}
      disabled={disabled}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className='w-6 h-6 text-zinc-100' />
      )}
    </button>
  )
}
