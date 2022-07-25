import React from 'react'
import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export const CloseButton = () => {
  return (
    <Popover.Button
      className='top-5 right-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors'
      title='Close'
    >
      <X className='w-4 h-4' weight='bold' />
    </Popover.Button>
  )
}
