import { Button, Container, Reveal } from '@/components/atoms'

/** Full-height landing hero with a full-width headline and CTAs. */
export function Hero() {
  return (
    <section id="top" className="bg-hero relative flex flex-1 items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
      </div>

      <Container className="relative pb-6 pt-16">
        <Reveal className="max-w-5xl">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-[#d9ad45]/50 bg-[#fff8e6]/80 px-5 py-3 shadow-soft backdrop-blur">
            <span className="bg-linear-to-br from-[#e6b32e] via-[#c2410c] to-[#9a3412] bg-clip-text font-serif text-[clamp(2.75rem,7vw,3.5rem)] font-bold leading-[1.1] text-transparent">
              30
            </span>
            <span className="h-9 w-px bg-[#d9ad45]/55" aria-hidden="true" />
            <span className="flex flex-col text-left leading-[1.15]">
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#8a5a09]">
                Years of
              </span>
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#8a5a09]">
                excellence
              </span>
            </span>
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.01em] text-ink">
            Roshi Tech Inc
          </h1>
          <p className="mt-5 font-serif text-[clamp(1.35rem,3vw,2rem)] italic leading-tight text-gradient">
            Together we can build a better world
          </p>
          <p className="mt-6 max-w-3xl text-[clamp(1.05rem,2.2vw,1.35rem)] leading-relaxed text-ink-2">
            Since 1996, Roshi Tech has brought 30 years of consulting experience to understanding
            your requirements, studying them, and suggesting services tailored to your business,
            your challenges, and your people.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Request information</Button>
            <Button href="#services" variant="ghost">
              Explore services <span aria-hidden="true">›</span>
            </Button>
          </div>
          <p className="mt-6 text-[14px] text-muted">We get you implementing — not just planning.</p>
        </Reveal>
      </Container>
    </section>
  )
}
