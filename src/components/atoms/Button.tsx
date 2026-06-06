import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost'

interface BaseProps {
  variant?: Variant
  block?: boolean
  className?: string
  children: ReactNode
  ariaLabel?: string
}

interface LinkProps extends BaseProps {
  href: string
  target?: string
  rel?: string
  onClick?: () => void
}

interface ActionProps extends BaseProps {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

export type ButtonProps = LinkProps | ActionProps

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-soft hover:bg-accent-press hover:shadow-card',
  ghost: 'border border-line bg-paper/60 text-ink hover:border-ink/30 hover:bg-paper',
}

function isLink(props: ButtonProps): props is LinkProps {
  return typeof (props as LinkProps).href === 'string'
}

/** Pill button that renders an anchor when `href` is given, otherwise a button. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', block, className, children, ariaLabel } = props
  const classes = cn(base, variants[variant], block && 'w-full', className)

  if (isLink(props)) {
    return (
      <a
        className={classes}
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      aria-label={ariaLabel}
      disabled={props.disabled}
    >
      {children}
    </button>
  )
}
