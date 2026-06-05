export interface LeaderFact {
  label: string
  detail?: string
}

export interface Leader {
  name: string
  initials: string
  role: string
  bio: string
  linkedInUrl: string
  facts: LeaderFact[]
}

export const leaders: Leader[] = [
  {
    name: 'Prasad Tadi',
    initials: 'PT',
    role: 'Founder & CEO',
    bio: 'Roshi Tech, Inc. is owned and operated by Prasad Tadi, who founded the company in 1996. He brings over 20 years of experience in technical services, sales, marketing and business management across India and the USA.',
    linkedInUrl: 'https://www.linkedin.com/in/prasadtadi',
    facts: [
      {
        label: 'Sr. Systems Analyst (1986–1991)',
        detail:
          'developed and implemented a CRISP project, rolling it out to all 500+ districts in India.',
      },
      { label: 'Project Leader, CBSI / Digital Equipment Corporation (1992–96)' },
      { label: 'M.S. in Computer Sciences', detail: 'IIT Kharagpur, 1984–86' },
      { label: 'B.S. in Electrical Engineering', detail: 'A.U. Engineering College, 1980–84' },
    ],
  },
  {
    name: 'Babitha Prasad',
    initials: 'BP',
    role: 'COO',
    bio: 'Babitha Prasad helps lead Roshi Tech operations, supporting the company’s client relationships, administration and delivery coordination.',
    linkedInUrl: 'https://www.linkedin.com/in/babitha-prasad-07456512',
    facts: [
      { label: 'Operations leadership' },
      { label: 'Client relationship support' },
      { label: 'Business administration' },
      { label: 'Delivery coordination' },
    ],
  },
]
