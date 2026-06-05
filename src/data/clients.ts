import type { ClientGroup } from './types'

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
