import { externalLinks } from '@/data/site'

/** Flagship DreamBox product card — dark, with an animated rotating mark. */
export function FeatureCard() {
  return (
    <a
      href={externalLinks.dreambox}
      target="_blank"
      rel="noopener"
      className="group relative grid items-center gap-6 overflow-hidden rounded-3xl bg-linear-to-br from-night to-[#2c2118] p-8 text-on-night transition duration-300 hover:-translate-y-1 hover:shadow-float sm:grid-cols-[1.2fr_0.8fr] sm:p-12"
    >
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-sky">
          Featured product
        </p>
        <h3 className="mt-2 text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold tracking-[-0.02em] text-on-night">
          DreamBox
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-on-night-muted">
          Our integrated platform that brings the full development lifecycle together in one place.
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-sky">
          Visit DreamBox
          <span
            aria-hidden="true"
            className="text-[18px] leading-none transition-transform duration-300 group-hover:translate-x-1"
          >
            &rsaquo;
          </span>
        </span>
      </div>
      <div className="relative hidden place-items-center sm:grid" aria-hidden="true">
        <div className="feature-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <span className="feature-mark relative text-[clamp(4rem,9vw,7rem)] font-bold leading-none">◇</span>
      </div>
    </a>
  )
}
