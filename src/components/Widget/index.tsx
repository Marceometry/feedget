import React from 'react'
import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from '..'

type Props = {
  clientId: string
}

export const Widget = ({ clientId }: Props) => {
  return (
    <Popover className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col items-end text-zinc-800 dark:text-zinc-100'>
      <Popover.Panel>
        <WidgetForm clientId={clientId} />
      </Popover.Panel>

      <Popover.Button className='primary rounded-full px-3 h-12 flex items-center group transition-colors'>
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
