import { BRAND_300, BRAND_500, TEXT_ON_BRAND } from '@/constants'

export type Theme = 'dark' | 'light' | 'system'

export const setTheme = (theme: Theme) => {
  const root = document.documentElement.classList
  if (
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    root.add('dark')
  } else {
    root.remove('dark')
  }
}

export const setPrimaryColors = ({ background, hover, text }) => {
  const root = document.documentElement.style
  root.setProperty(BRAND_500.name, background || BRAND_500.color)
  root.setProperty(BRAND_300.name, hover || background || BRAND_300.color)
  root.setProperty(TEXT_ON_BRAND.name, text || TEXT_ON_BRAND.color)
}
