import type { ServiceModel } from '@/data/types'

/** Numbered engagement-model card in the dark Models section. */
export function ModelCard({ model }: { model: ServiceModel }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-night-card p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="font-serif text-[15px] italic text-accent-sky">{model.no}</div>
      <h3 className="mt-3 text-[19px] font-semibold text-on-night">{model.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-on-night-muted">{model.desc}</p>
    </div>
  )
}
