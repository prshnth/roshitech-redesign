import type { ClientGroup } from '@/data/types'

/** A category of past clients with its member list. */
export function ClientGroupCard({ group }: { group: ClientGroup }) {
  return (
    <div className="rounded-2xl border border-line-soft bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-2">
        {group.title}
      </h3>
      <ul className="mt-4 space-y-2">
        {group.items.map((item) => (
          <li key={item} className="text-[15px] text-ink-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
