import type { Service } from './types'

/**
 * The services offered by Roshi Tech, with their full descriptions.
 * Order matches the original site's featured ordering.
 */
export const services: Service[] = [
  {
    id: 'alm',
    name: 'Application Lifecycle Management',
    icon: '◉',
    blocks: [
      {
        type: 'p',
        text: 'ALM is the new mantra for an Integrated Software Development Environment (ISDE). We help organizations identify the right tools for their growth needs and budgets — spanning Requirements Management, Code Management, Testing, Tracking and Release Management.',
      },
      {
        type: 'p',
        text: 'We partner with IBM Rational Suite, Accurev, Borland, Open CollabNet Suite and Microsoft Team Foundation, then deliver a smooth integration of these tools into one complete ALM solution, customized to your preferences.',
      },
    ],
  },
  {
    id: 'configuration-management',
    name: 'Configuration Management',
    icon: '◧',
    blocks: [
      {
        type: 'p',
        text: 'A leading provider of Integrated Computing Environment solutions, designed to help clients cost-effectively manage and develop their IT environment successfully.',
      },
      {
        type: 'list',
        items: [
          'Expertise in Change Management & Version Control tools — ClearCase, Subversion, CVS, Accurev, Perforce, VSS, Starbase and PVCS',
          'Process suggestion, install, maintain & integration with other tools',
          'Process automation using triggers and tools administration',
          'Build & Release engineering using tools and scripts — Maven, Ant, Clearmake, GNU Make, PERL, Shell',
          'Web enabling',
        ],
      },
    ],
  },
  {
    id: 'qa-automation',
    name: 'QA & Automation',
    icon: '◑',
    blocks: [
      {
        type: 'p',
        text: 'Expertise in QA and Automation tools — Rational Robot, Silk, WinRunner, Rational Test Manager, Selenium and JUnit.',
      },
      {
        type: 'list',
        items: [
          'Set up test repositories and integrate with the rest of your tools',
          'Execute the specified project within the time period and deliver',
          'Automate tests using PCLI and scripts',
          'Implement data-driven test automation, reducing overhead for future changes',
          'Integrate tests and test suites into Software Development Life Cycles',
        ],
      },
    ],
  },
  {
    id: 'change-management',
    name: 'Change Management',
    icon: '◈',
    blocks: [
      {
        type: 'p',
        text: 'Expertise in Defect Management Tools — ClearQuest, Bugzilla, JIRA, Test Doctor and Starbase.',
      },
      {
        type: 'list',
        items: [
          'Install and customize Change Management tools',
          'Integrate Change Management with Source Code management and other tools to deliver Application Lifecycle Management (ALM)',
        ],
      },
    ],
  },
  {
    id: 'mobile-application-development',
    name: 'Mobile Application Development',
    icon: '◐',
    blocks: [
      {
        type: 'p',
        text: 'Full-spectrum mobile application development that encompasses the entire cycle — from initial design and architecture to development and integration into existing systems.',
      },
      {
        type: 'p',
        text: 'iPhone application development, Windows Mobile, mobile-enabled websites and J2ME-based development across Nokia, Samsung, LG, Google Android and NFC phones. We’ve built across Symbian OS, J2ME, iPhone, Win CE, Palm OS, CDMA & GSM phones and Tablet PCs, specializing in GPS-based J2ME applications and end-to-end mobile/wireless solutions.',
      },
    ],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    icon: '◇',
    blocks: [
      {
        type: 'p',
        text: 'Project Management is an essential skill set for the successful development and delivery of a project. We have PMP-certified professionals available to address our customers’ project management needs.',
      },
      {
        type: 'p',
        text: 'We work with industry-standard tools and have integrated PM tools with the rest of the toolchain to provide complete Software Development Life Cycle (SDLC) management.',
      },
    ],
  },
  {
    id: 'requirements-management',
    name: 'Requirements Management',
    icon: '◎',
    blocks: [
      {
        type: 'p',
        text: 'Requirements are the basis for any system development. The most important feature of product delivery is to make sure the requirements initially agreed are successfully developed, tested and delivered on time and on budget.',
      },
      {
        type: 'p',
        text: 'Part of CMMI Maturity Level 2, encompassing: obtain an understanding of requirements; obtain commitment to requirements; manage requirements changes; maintain bidirectional traceability; and identify inconsistencies between project work and requirements.',
      },
      {
        type: 'p',
        text: 'We use IBM/Rational RequisitePro and ClearQuest for requirements tracking — building traceability matrices between requirements and test cases, linking requirements, work items and defects, and developing custom database applications for engineering requirements documentation.',
      },
    ],
  },
  {
    id: 'build-management',
    name: 'Build Management',
    icon: '◔',
    blocks: [
      {
        type: 'list',
        items: [
          'Build Management Tools — Build Forge, Bamboo, Cruise Control',
          'Build Tools — make, iMake, Ant, Maven2',
          'Packaging Tools — rpm, pkg, InstallShield, Wise',
          'Cross Compilers — WinRiver, Green Hill Compilers, GNU',
        ],
      },
      {
        type: 'p',
        text: 'We integrate Change Management, Source Code management and other tools to provide Application Lifecycle Management (ALM).',
      },
    ],
  },
  {
    id: 'release-management',
    name: 'Release Management',
    icon: '◓',
    blocks: [
      {
        type: 'p',
        text: 'Release Management is a combination of multiple disciplines — including Build Management, Package Management and releasing of the product. The Release Manager interacts with Development, Build Engineering, QA, Documentation and Support teams.',
      },
      {
        type: 'list',
        items: [
          'Patch management & upgrade compatibility',
          'Release notes preparation',
          'Feature tracking in releases',
          'Defect documentation from earlier versions',
          'Release numbering — Major.Minor.Maintenance.Patch (e.g. 1.0.2.4)',
        ],
      },
      {
        type: 'p',
        text: 'Roshi Tech has provided release management consulting to multiple customers and served in the Release Manager capacity for clients.',
      },
    ],
  },
  {
    id: 'tools-integrations',
    name: 'Tools Integrations',
    icon: '◭',
    blocks: [
      {
        type: 'p',
        text: 'The goal of integration is to avoid human intervention and automate programs to provide smooth integrations among tools. Typically the data for a software project is spread across many tools — and without integration it’s difficult to gain comprehensive project visibility.',
      },
      {
        type: 'list',
        items: [
          'Defect Tracking (CQ) with Customer Tracking (Remedy, Soffront)',
          'Project Management (MS Project) with Requirements Tracking (ReqPro)',
          'IBM’s ReqPro with HP’s Test Director',
          'Requirements Tracking (ReqPro) with Change Tracking (CQ)',
          'Defect Systems (CQ, Bugzilla) with Version Control (ClearCase, UCM, SVN, CVS)',
        ],
      },
      {
        type: 'p',
        text: 'We’ve helped clients integrate different tool sets — particularly during company mergers requiring consolidation across organizations.',
      },
    ],
  },
  {
    id: 'reports-management',
    name: 'Reports Management',
    icon: '◫',
    blocks: [
      {
        type: 'p',
        text: 'Reports and dashboards are the way to represent project data collected in various phases of a project, from Design to Release. Most tools have limited capability for representing data — and consolidating insight otherwise means gathering multiple reports from multiple tools.',
      },
      {
        type: 'list',
        items: [
          'Data collection from multiple tools across project phases',
          'Complex report generation with Spreadsheets (Excel), Crystal Reports and BIRT',
          'Multi-dimensional data analysis',
          'Data extraction from relational databases and proprietary systems via tool APIs',
        ],
      },
      {
        type: 'p',
        text: 'When standard tools lack adequate SDK/API access, we develop custom solutions using PERL, VB, JAVA and SQL.',
      },
    ],
  },
  {
    id: 'training-services',
    name: 'Training Services',
    icon: '◆',
    blocks: [
      {
        type: 'p',
        text: 'Roshi Tech has delivered customized training to many organizations — and to its own employees — in new tools and technologies.',
      },
      {
        type: 'list',
        items: [
          'Trained IAAF on using Rational tools to support and achieve CMMI Level 2',
          'Trained CSFB on using CVS as a Version Control system',
          'Trained Thompson Financial on CVS-based Version Control',
          'Trained Fidelity on Rational Tools and their use in Integrated Development Environments',
          'Courses on ClearCase, ClearQuest, SVN, CVS, AccuRev, StarBase and using Maven for Build Management',
        ],
      },
    ],
  },
  {
    id: 'salesforce',
    name: 'Salesforce Solutions That Drive Business Growth',
    icon: '◒',
    blocks: [
      {
        type: 'p',
        text: 'We help organizations maximize the value of Salesforce through strategic consulting, implementation, integration, and ongoing support. From Sales Cloud and Service Cloud to Revenue Cloud, AI, and custom platform development, our team delivers scalable solutions that improve customer experiences, streamline operations, and accelerate business outcomes.',
      },
    ],
  },
]
