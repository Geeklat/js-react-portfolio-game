import type { SkillGroup } from '../types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend engineering',
    skills: [
      'React · TypeScript · JavaScript',
      'Vue · Angular',
      'HTML5 · CSS3 · Sass · Responsive Design',
      'WCAG/ADA Accessibility · UX/UI Collaboration',
    ],
  },
  {
    id: 'backend',
    title: 'Backend and APIs',
    skills: [
      'Node.js · REST APIs · API Integration',
      'Java · Spring · PHP',
      'Python Scripting · C#',
    ],
  },
  {
    id: 'quality',
    title: 'Testing and quality',
    skills: ['Jest · Unit Testing · Test Refactoring', 'QA Validation · Accessibility Review'],
  },
  {
    id: 'delivery',
    title: 'Data, cloud, and delivery',
    skills: [
      'SQL · MySQL · Oracle · MongoDB',
      'AWS · Azure · AWS Lambda',
      'Git · GitLab · Jenkins · npm · CI/CD Troubleshooting',
    ],
  },
  {
    id: 'practices',
    title: 'Engineering practices',
    skills: [
      'Brownfield Development · Application Maintenance',
      'Feature-Flagged Delivery · Refactoring',
      'Technical Planning · Roadmap Development · COTS Evaluation',
      'Documentation',
    ],
  },
  {
    id: 'ai-workflows',
    title: 'AI-assisted engineering',
    skills: [
      'Agentic Workflows · Prompt Engineering',
      'MCP-Enabled Integrations · Agent Steering Files · Memory Banks',
      'Ticket Breakdown · Implementation Planning · Code Analysis',
    ],
  },
]
