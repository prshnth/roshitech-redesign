import { Button, Container, Reveal } from '@/components/atoms'

function CeoGratitudeCard() {
  return (
    <div className="rounded-3xl border border-line-soft bg-paper-3/80 p-5 shadow-card backdrop-blur sm:p-6">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-2">
        A note from our CEO
      </p>
      <h2 className="mt-2 font-serif text-[clamp(1.4rem,2vw,1.75rem)] font-semibold leading-tight text-ink">
        Company Anniversary Announcement
      </h2>
      <div className="mt-3 space-y-2.5 text-[13px] leading-[1.55] text-ink-2 sm:text-[14px]">
        <p>
          As we celebrate a remarkable milestone in Roshi Tech’s journey, we extend our deepest
          appreciation to everyone who has been part of our story.
        </p>
        <p>
          For over three decades, our customers have placed their trust in our services and
          challenged us to innovate, improve, and grow. Your confidence has been the driving force
          behind Roshi Tech’s evolution, and we are truly grateful for your continued partnership.
        </p>
        <p>
          We also honor our past and present employees, whose dedication, expertise, and commitment
          to excellence have shaped the reputation Roshi Tech proudly carries today. Your
          contributions remain the foundation of our success.
        </p>
        <p>
          Our sincere thanks go to our valued partners as well. Your tools, technologies, and
          support have enabled us to consistently meet the diverse and evolving needs of our
          customers.
        </p>
        <p>
          As we step into the next decade, we remain committed to advancing our capabilities,
          embracing emerging technologies, and harnessing the transformative power of AI. With your
          support and goodwill, Roshi Tech looks forward to building an even stronger, more
          innovative future.
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-line-soft pt-4">
        <img
          src="/team/prasad-tadi.jpg"
          alt="Prasad Tadi"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div>
          <p className="text-[15px] font-semibold text-ink">Prasad Tadi</p>
          <p className="text-[14px] text-accent">Founder & CEO</p>
        </div>
      </div>
    </div>
  )
}

/** Landing hero with headline, CTAs and CEO milestone note. */
export function Hero() {
  return (
    <section id="top" className="bg-hero relative flex flex-1 items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
      </div>

      <Container className="relative pb-6 pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
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
            <p className="mt-6 text-[14px] text-muted">
              We get you implementing — not just planning.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <CeoGratitudeCard />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
