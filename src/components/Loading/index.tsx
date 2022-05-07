import { CircleNotch } from 'phosphor-react'

export const Loading = () => {
  return (
    <div className='w-6 h-6 grid place-items-center overflow-hidden'>
      <CircleNotch weight='bold' className='w-4 h-4 animate-spin' />
    </div>
  )
}
