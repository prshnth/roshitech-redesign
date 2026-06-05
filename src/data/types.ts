export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }

export interface Service {
  id: string
  name: string
  icon: string
  blocks: ContentBlock[]
}

export interface ServiceModel {
  no: string
  title: string
  desc: string
}

export interface ClientGroup {
  title: string
  items: string[]
}

export interface Stat {
  /** Static text shown when there is no count-up (e.g. "PMP"). */
  value?: string
  /** Numeric target for the count-up animation. */
  count?: number
  /** Suffix appended after the number (e.g. "+"). */
  suffix?: string
  label: string
}

export interface AboutPoint {
  title: string
  desc: string
}

export interface NavLink {
  label: string
  href: string
}
