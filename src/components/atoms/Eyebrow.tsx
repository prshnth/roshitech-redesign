import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EyebrowProps {
  children: ReactNode
  light?: boolean
  className?: string
}

/** Uppercase letter-spaced kicker shown above section titles. */
export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'text-[12px] font-semibold uppercase tracking-[0.14em]',
        light ? 'text-accent-sky' : 'text-accent',
        className,
      )}
    >
      {children}
    </p>
  )
}
