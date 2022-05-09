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
}

export const FeedbackWidget = ({
  clientId,
  theme = 'system',
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

  return <Widget clientId={clientId} />
}
