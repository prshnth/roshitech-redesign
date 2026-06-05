export interface JobPosting {
  title: string
  location: string
  type: string
  summary: string
  requirements: string
  technicalSkills: string
  note: string
  applyAddress: string
}

export const openRoles: JobPosting[] = [
  {
    title: 'Senior Software Engineer',
    location: 'Merrimack, NH',
    type: 'Full-time',
    summary:
      'Develop and modify software applications, analyze user requirements, design customized solutions to enhance operational efficiency, and manage database development independently or collaboratively.',
    requirements:
      'Master’s + 2 yrs (Computer Science, Engineering, Information Systems or related).',
    technicalSkills:
      'Salesforce.com platform — Sales Cloud, Service Cloud, Marketing Cloud, custom objects, workflow rules, approval processes, validation rules, profiles, page layouts, reports, dashboards, record types, Data Loader and MS Excel.',
    note: 'Travel and/or relocation to various unanticipated client sites within the United States may be required.',
    applyAddress: '5 Castleton Court, Merrimack, NH 03054',
  },
]
