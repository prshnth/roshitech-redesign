import { Button, Container, Reveal } from '@/components/atoms'

/** Full-height landing hero with animated gradient orbs. */
export function Hero() {
  return (
    <section id="top" className="bg-hero relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
      </div>

      <Container className="relative py-32">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#d9ad45]/45 bg-[#fff8e6]/80 px-4 py-2 shadow-soft backdrop-blur">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-linear-to-br from-[#fff7ca] via-[#e2ad32] to-[#9f6a0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_8px_22px_rgba(165,111,18,0.22)]">
              <span className="absolute inset-[3px] rounded-full border border-white/40" />
              <span className="font-serif text-[25px] font-bold leading-none text-[#5b3904]">
                30
              </span>
            </span>
            <span className="text-[14px] font-semibold uppercase tracking-normal text-[#8a5a09]">
              Years of excellence
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(2.6rem,7vw,5rem)] font-bold leading-[1.04] tracking-normal text-ink">
            Roshi Tech Inc
          </h1>
          <p className="mt-5 font-serif text-[clamp(1.35rem,3vw,2rem)] italic leading-tight text-gradient">
            Together we can build a better world
          </p>
          <p className="mt-6 max-w-xl text-[clamp(1.05rem,2.2vw,1.35rem)] leading-relaxed text-ink-2">
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
