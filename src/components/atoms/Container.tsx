import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centered content column with the site's standard max-width and gutters. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-6', className)}>{children}</div>
}
