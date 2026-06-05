import { Container, Reveal, Section } from '@/components/atoms'
import { AboutPointCard, SectionHead } from '@/components/molecules'
import { aboutLead, aboutPoints } from '@/data/about'
import { cn } from '@/lib/cn'

/** Company overview: narrative lead + benefit cards. */
export function About() {
  return (
    <Section id="about" className="bg-paper">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="About Roshi Tech"
            title="A consulting partner for the full software lifecycle."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="space-y-5">
            {aboutLead.map((para, i) => (
              <p
                key={i}
                className={cn(
                  'leading-relaxed',
                  i === 0 ? 'text-[19px] text-ink-2' : 'text-[16px] text-muted',
                )}
              >
                {para}
              </p>
            ))}
          </Reveal>

          <div className="grid gap-4">
            {aboutPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <AboutPointCard point={point} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
