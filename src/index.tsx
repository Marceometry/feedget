import React from 'react'
import { Widget } from './components'
import { Theme, setTheme, setPrimaryColors } from './styles'

import './styles/global.css'
import './@types/svg'

export type FeedbackWidgetProps = {
  clientId: string
  theme?: Theme
  primaryColor?: string
  primaryColorHover?: string
  primaryColorText?: string
  positionStrategy?: 'fixed' | 'absolute' | 'relative'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const FeedGet = ({
  clientId,
  theme = 'system',
  positionStrategy = 'fixed',
  position = 'bottom-right',
  primaryColor,
  primaryColorHover,
  primaryColorText,
}: FeedbackWidgetProps) => {
  setTheme(theme)
  setPrimaryColors({
    background: primaryColor,
    hover: primaryColorHover,
    text: primaryColorText,
  })

  const positions = `
    ${position.startsWith('top') ? 'top-4 sm:top-8' : 'bottom-4 sm:bottom-8'}
    ${position.endsWith('left') ? 'left-4 sm:left-8' : 'right-4 sm:right-8'}
  `

  return (
    <Widget
      clientId={clientId}
      positions={positions}
      positionStrategy={positionStrategy}
      flexAlign={position.endsWith('left') ? 'items-start' : 'items-end'}
      flexCol={position.startsWith('top') ? 'flex-col-reverse' : 'flex-col'}
    />
  )
}
