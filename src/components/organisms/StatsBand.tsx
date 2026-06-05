import { Container } from '@/components/atoms'
import { StatItem } from '@/components/molecules'
import { stats } from '@/data/stats'

/** Dark band of animated count-up statistics. */
export function StatsBand() {
  return (
    <section aria-label="Company at a glance" className="bg-night py-[clamp(3rem,6vw,4.5rem)]">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
