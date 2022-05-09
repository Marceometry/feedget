import React from 'react'
import { Widget } from './components'
import { Theme, setTheme, setPrimaryColors } from './styles'

import './styles/global.css'
import './@types/svg'

export type FeedbackWidgetProps = {
  userId: string
  theme?: Theme
  primaryColor?: string
  primaryColorHover?: string
  primaryColorText?: string
}

export const FeedbackWidget = ({
  userId,
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

  return <Widget userId={userId} />
}
