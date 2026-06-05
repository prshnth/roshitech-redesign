import type { AboutPoint } from '@/data/types'

/** Benefit card in the About section. */
export function AboutPointCard({ point }: { point: AboutPoint }) {
  return (
    <div className="rounded-2xl border border-line-soft bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-line hover:shadow-card">
      <h3 className="text-[17px] font-semibold text-ink">{point.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{point.desc}</p>
    </div>
  )
}
