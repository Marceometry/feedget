import React, { useMemo, useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import { api } from '@/services'
import { FeedbackType, feedbackTypes } from '@/constants'
import { Button, CloseButton, ScreenshotButton } from '@/components'

type Props = {
  feedbackType: FeedbackType
  handleRestartFeedback: () => void
  onFormSubmit: () => void
  clientId: string
}

export const FeedbackFormStep = ({
  feedbackType,
  handleRestartFeedback,
  onFormSubmit,
  clientId,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const stepInfo = useMemo(() => feedbackTypes[feedbackType], [feedbackType])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setHasError(false)
    try {
      const payload = {
        comment,
        screenshot,
        clientId,
        type: feedbackType,
      }
      await api.post('feedbacks/create', payload)
      onFormSubmit()
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <header>
        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors'
          onClick={handleRestartFeedback}
        >
          <ArrowLeft className='w-4 h-4' weight='bold' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            src={stepInfo.image.source}
            alt={stepInfo.image.alt}
            className='w-6 h-6'
          />
          {stepInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmit} className='my-4 w-full'>
        <textarea
          disabled={isLoading}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Conte com detalhes o que está acontecendo'
          className='w-full min-w-[304px] min-h-[100px] py-2 px-3 text-sm placeholder-zinc-500 text-zinc-800 border-zinc-300 dark:placeholder-zinc-400 dark:text-zinc-100 dark:border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent disabled:opacity-50'
        />

        <footer className='flex gap-2 mt-1'>
          <ScreenshotButton
            disabled={isLoading}
            screenshot={screenshot}
            onScreenshot={setScreenshot}
          />
          <Button
            type='submit'
            disabled={comment.length === 0 || isLoading}
            isLoading={isLoading}
          >
            {hasError ? 'Erro. Tentar novamente' : 'Enviar feedback'}
          </Button>
        </footer>
      </form>
    </>
  )
}
