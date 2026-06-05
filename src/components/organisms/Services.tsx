import { Container, Reveal, Section } from '@/components/atoms'
import { SectionHead, ServiceAccordion } from '@/components/molecules'
import { services } from '@/data/services'

const servicesIntro =
  'Roshi Tech offers a wide variety of services across many industries, focused on Software Development Life Cycles (SDLC) and Integrated Development Frameworks. We help clients design, document and follow a process to achieve their goals — and we’ve built the tools and integrations that give them a strong foundation to build on.'

/** Services section: the full service catalog as a uniform, expandable list. */
export function Services() {
  return (
    <Section id="services" className="bg-paper-2">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="What we do"
            title="Focused on the Software Development Life Cycle."
            intro={servicesIntro}
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 0.08}>
              <ServiceAccordion service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
