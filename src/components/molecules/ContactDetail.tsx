import type { ReactNode } from 'react'

interface ContactDetailProps {
  label: string
  children: ReactNode
}

/** Labelled contact line (address / phone / fax) in the dark Contact section. */
export function ContactDetail({ label, children }: ContactDetailProps) {
  return (
    <div>
      <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-on-night-muted">
        {label}
      </div>
      <div className="mt-1 text-[15px] leading-relaxed text-on-night">{children}</div>
    </div>
  )
}
