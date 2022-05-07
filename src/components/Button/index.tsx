import { Loading } from '@/components'
import './styles.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  className = '',
  isLoading,
  children,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={`button focus disabled ${variant} ${className}`}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </button>
  )
}
