import { Container, Reveal, Section } from '@/components/atoms'
import { ModelCard, SectionHead } from '@/components/molecules'
import { serviceModels } from '@/data/serviceModels'

/** Dark section presenting the five engagement models. */
export function Models() {
  return (
    <Section id="models" className="bg-night-2">
      <Container>
        <Reveal>
          <SectionHead eyebrow="Engagement" title="Service models that flex to your needs." light />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceModels.map((model, i) => (
            <Reveal key={model.no} delay={(i % 3) * 0.08}>
              <ModelCard model={model} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
