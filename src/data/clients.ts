import type { ClientGroup } from './types'

export interface FeaturedClient {
  name: string
  logo: string
}

export const clientGroups: ClientGroup[] = [
  { title: 'Telecom', items: ['Nokia', '3Com', 'Comverse'] },
  { title: 'Financial', items: ['Fidelity', 'State Street', 'CSFB', 'Thompson Financials'] },
  { title: 'Bio Tech', items: ['Genome', 'Wyeth'] },
  { title: 'Database', items: ['Sybase', 'RedBrick', 'Informix'] },
  {
    title: 'E-Business',
    items: [
      'OrderTrust',
      'Jessepen',
      'CMGI / Engage / iCast / Adsmart',
      'EPrise',
      'Venturcom',
      'NorthernLight',
      'Polaroid',
      'BrassRing',
    ],
  },
  { title: 'Others', items: ['EMC / Clariion', 'Equipe'] },
]

/** Recognizable client marks rendered in the top carousel. */
export const featuredClients: FeaturedClient[] = [
  { name: 'Fidelity Investments', logo: '/client-logos/fidelity.svg' },
  { name: 'Nokia', logo: '/client-logos/nokia.svg' },
  { name: 'State Street', logo: '/client-logos/state-street.png' },
  { name: 'Sybase', logo: '/client-logos/sybase.png' },
  { name: 'Polaroid', logo: '/client-logos/polaroid.png' },
  { name: 'IBM Informix', logo: '/client-logos/ibm.svg' },
  { name: 'Dell EMC', logo: '/client-logos/dell.png' },
  { name: 'Comverse', logo: '/client-logos/comverse.png' },
  { name: 'Wyeth / Pfizer', logo: '/client-logos/pfizer.png' },
]
