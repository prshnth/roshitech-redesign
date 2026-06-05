import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  onDark?: boolean
}

/** Brand lockup: a terracotta monogram tile ("R") paired with the "Roshi Tech"
 *  wordmark. The wordmark adapts to dark surfaces via `onDark`. */
export function Logo({ className, onDark }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-[10px] bg-linear-to-br from-accent to-accent-deep font-serif text-[20px] font-bold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_5px_14px_rgba(194,65,12,0.30)]"
      >
        R
      </span>
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
