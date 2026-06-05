import type { NavLink } from './types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Models', href: '#models' },
  { label: 'Clients', href: '#clients' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Careers', href: '#careers' },
]

export const externalLinks = {
  dreambox: 'http://dreambox.roshitech.com',
  employees: 'https://roshitech.com/Employees',
}

export const contact = {
  office: ['5, Castleton Court', 'Merrimack, NH, USA 03054'],
  phone: '(603) 889-2211',
  phoneHref: 'tel:+16038892211',
  fax: '(270) 568-6295',
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Leadership', href: '#leadership' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All services', href: '#services' },
      { label: 'Service models', href: '#models' },
      { label: 'DreamBox', href: externalLinks.dreambox, external: true },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Clients', href: '#clients' },
      { label: 'Contact', href: '#contact' },
      { label: 'Employees Only', href: externalLinks.employees, external: true },
    ],
  },
]

export const serviceOptions = [
  'Project Management',
  'Requirements Management',
  'Configuration Management',
  'Change Management',
  'Build Management',
  'Release Management',
  'QA & Automation',
  'Tools Integrations',
  'Application Lifecycle Management',
  'Reports Management',
  'Training Services',
  'Mobile Application Development',
  'Other',
]

export const referralOptions = [
  'Browsing the web',
  'Referral from another client',
  'Direct mail',
  'Speaker’s bureau / Professional association',
  'Other',
]
