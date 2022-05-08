import React, { useState } from 'react'
import { FeedbackType } from '@/constants'
import {
  FeedbackFormStep,
  FeedbackSuccessStep,
  FeedbackTypeStep,
} from './Steps'

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-white dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback} />
      ) : !feedbackType ? (
        <FeedbackTypeStep handleChangeFeedback={setFeedbackType} />
      ) : (
        <FeedbackFormStep
          feedbackType={feedbackType}
          handleRestartFeedback={handleRestartFeedback}
          onFormSubmit={() => setFeedbackSent(true)}
        />
      )}

      <footer className='text-xs text-zinc-500 dark:text-zinc-400'>
        Feito com ♥ por{' '}
        <a
          className='underline underline-offset-1 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors'
          href='https://github.com/Marceometry'
          target='_blank'
        >
          Marcelino Teixeira
        </a>
      </footer>
    </div>
  )
}
