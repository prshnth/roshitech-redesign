import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  onDark?: boolean
}

/** Brand lockup: the transparent Roshi Tech mark paired with the "Roshi Tech"
 *  wordmark. The wordmark adapts to dark surfaces via `onDark`. */
export function Logo({ className, onDark }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img src="/rti-icon.png" alt="" aria-hidden="true" className="h-9 w-auto object-contain" />
      <span
        className={cn(
          'text-[19px] font-semibold tracking-[-0.02em]',
          onDark ? 'text-on-night' : 'text-ink',
        )}
      >
        Roshi Tech
      </span>
    </span>
  )
}
