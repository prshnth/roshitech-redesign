import { Container, Reveal, Section } from '@/components/atoms'
import { SectionHead } from '@/components/molecules'
import { leaders } from '@/data/leadership'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z"
      />
    </svg>
  )
}

/** Leadership profile cards with biography and career milestones. */
export function Leadership() {
  return (
    <Section id="leadership" className="bg-paper">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Leadership"
            title="Founded and led with three decades of experience."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-5">
            {leaders.map((leader) => (
              <div className="grid h-full gap-6 rounded-3xl border border-line-soft bg-paper-3 p-6 sm:p-8">
                <div className="flex items-center gap-5">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-accent to-[#6a3df0] text-[24px] font-bold text-white sm:h-24 sm:w-24 sm:text-[28px]">
                    {leader.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-[22px] font-semibold text-ink">{leader.name}</h3>
                      <a
                        href={leader.linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-soft text-accent transition hover:border-accent hover:bg-white hover:shadow-card"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                    <p className="mt-1 text-[15px] text-accent">{leader.role}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[17px] leading-relaxed text-ink-2">{leader.bio}</p>
                  <ul className="mt-6 grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {leader.facts.map((fact) => (
                      <li key={fact.label} className="border-l-2 border-line pl-4">
                        <span className="text-[15px] font-medium text-ink">{fact.label}</span>
                        {fact.detail && (
                          <span className="mt-0.5 block text-[14px] leading-relaxed text-muted">
                            {fact.detail}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
