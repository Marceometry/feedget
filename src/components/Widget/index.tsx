import React from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from '..'

type Props = {
  clientId: string
  flexAlign?: string
  flexCol?: string
  positions?: string
  positionStrategy?: 'fixed' | 'absolute' | 'relative'
}

export const Widget = ({
  clientId,
  positionStrategy,
  positions,
  flexAlign,
  flexCol,
}: Props) => {
  const panelMargin = flexCol.endsWith('reverse') ? 'mt-4' : 'mb-4'

  return (
    <Popover
      className={`${positionStrategy} ${positions} flex ${flexCol} ${flexAlign} text-zinc-800 dark:text-zinc-100 z-[100]`}
    >
      <Popover.Panel>
        <WidgetForm clientId={clientId} margin={panelMargin} />
      </Popover.Panel>

      <Popover.Button className='max-w-fit primary rounded-full px-3 h-12 flex items-center group transition-colors'>
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
