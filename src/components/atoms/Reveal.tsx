import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in seconds, applied via the `--reveal-delay` custom property. */
  delay?: number
  className?: string
}

/** Fades + lifts its children into view the first time they're scrolled to. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
