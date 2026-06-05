import type { ReactNode } from 'react'
import { Eyebrow, SectionTitle } from '@/components/atoms'
import { cn } from '@/lib/cn'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  intro?: string
  light?: boolean
  className?: string
}

/** Eyebrow + title (+ optional intro) header shared by every section. */
export function SectionHead({ eyebrow, title, intro, light, className }: SectionHeadProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <SectionTitle light={light} className="mt-3">
        {title}
      </SectionTitle>
      {intro && (
        <p
          className={cn(
            'mt-5 text-[17px] leading-relaxed',
            light ? 'text-on-night-muted' : 'text-muted',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
