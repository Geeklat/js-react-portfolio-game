import type { Experience } from '../types/portfolio'

// Recent, frontend-relevant roles receive fuller treatment. Earlier roles remain
// represented below so the complete approved employment history stays visible.
export const featuredExperience: Experience[] = [
  {
    id: 'tensure',
    employer: 'Tensure Consulting',
    role: 'Lead Software Engineer',
    dates: 'November 2023 – Present',
    summary:
      'Frontend-focused consulting across client applications, supporting brownfield development, maintenance, feature delivery, and incremental improvement of existing web systems.',
    achievements: [
      'Improved application maintainability, WCAG/ADA accessibility alignment, user experience, and long-term stability.',
      'Contributed to roadmap development, feasibility analysis, architecture discussions, COTS evaluation, and effort estimation.',
      'Clarified delivery scope across API behavior, user roles, feature flags, client workflows, infrastructure dependencies, and QA paths.',
      'Developed AI-assisted workflows for ticket breakdown, implementation planning, documentation, validation, and code analysis.',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Node.js'],
  },
  {
    id: 'surecost',
    employer: 'SureCost',
    role: 'Senior Frontend Engineer',
    dates: 'November 2022 – April 2023',
    summary:
      'Supported discovery and planning for migrating a large legacy pharmacy application from Struts/Spring toward a modern React frontend architecture.',
    achievements: [
      'Reviewed application patterns, frontend constraints, and legacy implementation details to help define a practical migration path.',
      'Evaluated modernization risks while preserving established business workflows and ongoing support needs.',
      'Contributed to project outlines, scope, delivery milestones, and feature implementation planning.',
    ],
    technologies: ['React', 'Java', 'Struts', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'postclick',
    employer: 'Postclick',
    role: 'Senior Front End Engineer',
    dates: 'May 2022 – September 2022',
    summary:
      'Developed user-driven landing-page components within a remote, component-driven web architecture.',
    achievements: [
      'Built and maintained customer-facing frontend features and integrated WCAG/ADA accessibility improvements.',
      'Contributed to early migration planning from Bootstrap components toward Tailwind as part of a longer-term React transition.',
    ],
    technologies: ['JavaScript', 'Bootstrap', 'HTML', 'CSS', 'Node.js'],
  },
  {
    id: 'qsrsoft',
    employer: 'QsrSoft',
    role: 'Senior Software Engineer / Web Developer, Front End',
    dates: 'May 2021 – April 2022',
    summary:
      'Developed a new application add-on for a quick-service restaurant web suite and integrated it with the existing product ecosystem.',
    achievements: [
      'Designed and implemented a scheduling system supporting recurring ticket assignments for employees.',
      'Coordinated frontend development patterns and helped guide team members working with the application stack.',
      'Delivered the greenfield project before the contract concluded.',
    ],
    technologies: ['Vue', 'Vuetify', 'JavaScript', 'AWS', 'Node.js'],
  },
  {
    id: 'northrop-grumman',
    employer: 'Northrop Grumman',
    role: 'Senior Software Engineer → Principal Software Engineer',
    dates: 'October 2017 – May 2021',
    summary:
      'Built and modernized frontend applications for data ingestion, scheduling, operational visualization, and simulation workflows.',
    achievements: [
      'Redesigned a large-scale data-ingestion interface, reducing user onboarding time by 50% compared with the previous implementation.',
      'Modernized an obsolete Angular scheduler dashboard with Vue and Vuetify, improving maintainability, extensibility, and long-term support.',
      'Supported reusable standards and implementation approaches for Cesium/WebGL visualization work.',
    ],
    technologies: ['Vue', 'Vuetify', 'Angular', 'MongoDB', 'Cesium', 'WebGL'],
  },
]

export const earlierExperience: Experience[] = [
  {
    id: 'tmc-technologies',
    employer: 'TMC Technologies',
    role: 'Software Engineer',
    dates: 'April 2015 – October 2017',
    summary: '',
    achievements: [],
    technologies: [],
  },
  {
    id: 'azimuth',
    employer: 'Azimuth Inc.',
    role: 'Software Engineer',
    dates: 'November 2010 – April 2015',
    summary: '',
    achievements: [],
    technologies: [],
  },
  {
    id: 'fusion-technology',
    employer: 'Fusion Technology LLC',
    role: 'Graphic Designer',
    dates: 'July 2010 – December 2010',
    summary: '',
    achievements: [],
    technologies: [],
  },
]
