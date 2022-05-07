import { Button, CloseButton } from '@/components'
import { successImage } from '@/assets'

type Props = {
  handleRestartFeedback: () => void
}

export const FeedbackSuccessStep = ({ handleRestartFeedback }: Props) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className='flex flex-col items-center py-9 w-[304px]'>
        <img src={successImage} alt='Ícone de sucesso' />

        <span className='text-xl mt-[6px]'>Agradecemos o feedback!</span>

        <Button
          variant='secondary'
          className='mt-5 leading-6'
          onClick={handleRestartFeedback}
        >
          Quero enviar outro
        </Button>
      </div>
    </>
  )
}
