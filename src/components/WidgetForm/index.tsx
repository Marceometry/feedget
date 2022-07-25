import React, { useState } from 'react'
import { FeedbackType } from '@/constants'
import {
  FeedbackFormStep,
  FeedbackSuccessStep,
  FeedbackTypeStep,
} from './Steps'

type Props = {
  clientId: string
  margin: string
}

export const WidgetForm = ({ clientId, margin }: Props) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div
      className={`${margin} bg-white dark:bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto`}
    >
      {feedbackSent ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback} />
      ) : !feedbackType ? (
        <FeedbackTypeStep handleChangeFeedback={setFeedbackType} />
      ) : (
        <FeedbackFormStep
          clientId={clientId}
          feedbackType={feedbackType}
          handleRestartFeedback={handleRestartFeedback}
          onFormSubmit={() => setFeedbackSent(true)}
        />
      )}
    </div>
  )
}
