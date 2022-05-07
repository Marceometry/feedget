import { FeedbackType, feedbackTypes } from '@/constants'
import { CloseButton } from '@/components'

type Props = {
  handleChangeFeedback: (value: FeedbackType) => void
}

export const FeedbackTypeStep = ({ handleChangeFeedback }: Props) => {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className='flex gap-2 py-8 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type='button'
            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-colors'
            onClick={() => handleChangeFeedback(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  )
}
