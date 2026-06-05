import { Container, Reveal, Section } from '@/components/atoms'
import { ClientGroupCard, SectionHead } from '@/components/molecules'
import { clientGroups } from '@/data/clients'

const clientsIntro =
  'Roshi Tech has worked with a wide range of clients across industries — from telecom and financial services to biotech and e-business.'

/** Past clients grouped by industry vertical. */
export function Clients() {
  return (
    <Section id="clients" className="bg-paper-2">
      <Container>
        <Reveal>
          <SectionHead eyebrow="Clients" title="Trusted across industries." intro={clientsIntro} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <ClientGroupCard group={group} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
