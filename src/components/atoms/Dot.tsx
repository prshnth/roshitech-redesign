import { cn } from '@/lib/cn'

/** Small accent bullet used in feature/benefit lists. */
export function Dot({ className }: { className?: string }) {
  return (
    <span
      className={cn('mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent', className)}
      aria-hidden="true"
    />
  )
}
