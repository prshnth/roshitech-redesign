import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

/** Full-width page section with the site's vertical rhythm and an anchor id. */
export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn('py-[clamp(4rem,9vw,7rem)]', className)}>
      {children}
    </section>
  )
}
