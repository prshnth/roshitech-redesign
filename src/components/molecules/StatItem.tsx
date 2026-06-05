import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import type { Stat } from '@/data/types'

/** A single count-up statistic in the dark stats band. */
export function StatItem({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const counted = useCountUp(stat.count ?? 0, inView && stat.count != null)
  const display = stat.count != null ? `${counted}${stat.suffix ?? ''}` : stat.value

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-[clamp(2.2rem,5vw,3.1rem)] font-bold tracking-[-0.03em] text-on-night tabular-nums">
        {display}
      </div>
      <div className="mt-1 text-[14px] text-on-night-muted">{stat.label}</div>
    </div>
  )
}
