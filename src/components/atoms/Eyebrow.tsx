import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EyebrowProps {
  children: ReactNode
  light?: boolean
  className?: string
}

/** Serif-italic kicker shown above section titles. */
export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'font-serif text-[15px] italic',
        light ? 'text-accent-sky' : 'text-accent',
        className,
      )}
    >
      {children}
    </p>
  )
}
