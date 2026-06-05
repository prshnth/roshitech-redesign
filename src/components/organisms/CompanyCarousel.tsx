import { Container } from '@/components/atoms'
import { featuredClients } from '@/data/clients'

/** Client-logo carousel shown below the hero. */
export function CompanyCarousel() {
  const carouselItems = [...featuredClients, ...featuredClients]

  return (
    <section
      className="border-y border-line-soft bg-paper-3/80 py-6"
      aria-label="Client company icons"
    >
      <Container>
        <p className="mb-4 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-2">
          Trusted by teams at
        </p>
        <div className="company-carousel overflow-hidden">
          <div className="company-carousel-track flex w-max items-center gap-4">
            {carouselItems.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="grid h-20 w-28 shrink-0 place-items-center rounded-2xl border border-line-soft bg-paper px-4 shadow-soft"
                aria-label={client.name}
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
