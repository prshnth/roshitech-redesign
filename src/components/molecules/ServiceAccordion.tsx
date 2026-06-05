import { Dot } from '@/components/atoms'
import type { ContentBlock, Service } from '@/data/types'

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.type === 'p' ? (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {block.text}
          </p>
        ) : (
          <ul key={i} className="space-y-2">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <Dot />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  )
}

/** Expandable service entry built on native <details> for free accessibility. */
export function ServiceAccordion({ service }: { service: Service }) {
  return (
    <details className="group rounded-2xl border border-line-soft bg-paper transition-colors duration-300 hover:border-line open:border-line open:shadow-soft">
      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-2 text-[20px] text-accent transition-colors duration-300 group-open:bg-accent group-open:text-white">
          {service.icon}
        </span>
        <span className="flex-1 text-[16px] font-semibold text-ink">{service.name}</span>
        <svg
          className="h-4 w-4 shrink-0 text-muted-2 transition-transform duration-300 group-open:rotate-180"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="svc-body space-y-3 pb-6 pl-6 pr-5 pt-0 sm:pl-20">
        <Blocks blocks={service.blocks} />
      </div>
    </details>
  )
}
