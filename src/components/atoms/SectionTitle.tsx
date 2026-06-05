import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionTitleProps {
  children: ReactNode
  light?: boolean
  className?: string
}

/** Large display heading used at the top of each section. */
export function SectionTitle({ children, light, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'font-serif text-[clamp(1.9rem,4.6vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.01em]',
        light ? 'text-on-night' : 'text-ink',
        className,
      )}
    >
      {children}
    </h2>
  )
}
