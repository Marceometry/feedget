import React from 'react'
import { Widget } from './components'
import { Theme, setTheme } from './utils'

import './styles/global.css'
import './@types/svg'

export type FeedbackWidgetProps = {
  theme?: Theme
}

export const FeedbackWidget = ({ theme = 'system' }: FeedbackWidgetProps) => {
  setTheme(theme)

  return <Widget />
}
