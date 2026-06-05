import { Button, Container, Reveal, Section } from '@/components/atoms'
import { SectionHead } from '@/components/molecules'
import { openRoles } from '@/data/careers'

/** Open positions with full role detail. */
export function Careers() {
  return (
    <Section id="careers" className="bg-paper-2">
      <Container>
        <Reveal>
          <SectionHead eyebrow="Careers" title="Build the lifecycle with us." />
        </Reveal>

        <div className="mt-12 grid gap-6">
          {openRoles.map((role) => (
            <Reveal key={role.title}>
              <article className="rounded-3xl border border-line-soft bg-paper p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[22px] font-semibold text-ink">{role.title}</h3>
                    <p className="mt-1 text-[15px] text-muted">{role.location}</p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-4 py-1.5 text-[13px] font-medium text-accent">
                    {role.type}
                  </span>
                </div>

                <p className="mt-6 text-[16px] leading-relaxed text-ink-2">{role.summary}</p>

                <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-2">
                      Requirements
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
                      {role.requirements}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-2">
                      Technical skills
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
                      {role.technicalSkills}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 rounded-xl bg-paper-2 px-4 py-3 text-[14px] leading-relaxed text-muted">
                  {role.note}
                </p>

                <div className="mt-6 flex flex-col gap-3 border-t border-line-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[14px] text-muted">
                    Apply by mail: <span className="text-ink-2">{role.applyAddress}</span>
                  </p>
                  <Button href="#contact">Apply now</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
