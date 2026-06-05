import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  onDark?: boolean
}

/** Wordmark: "Roshi.Tech" with an accent-colored separator dot. */
export function Logo({ className, onDark }: LogoProps) {
  return (
    <span
      className={cn(
        'text-[19px] font-semibold tracking-[-0.02em]',
        onDark ? 'text-on-night' : 'text-ink',
        className,
      )}
    >
      Roshi<span className="text-accent">.</span>Tech
    </span>
  )
}
