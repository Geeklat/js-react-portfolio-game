import type { SkillGroup } from '../types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend engineering',
    skills: [
      { name: 'React · TypeScript · JavaScript' },
      { name: 'Vue · Angular' },
      { name: 'HTML5 · CSS3 · Sass · Responsive Design' },
      { name: 'WCAG/ADA Accessibility · UX/UI Collaboration' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend and APIs',
    skills: [
      { name: 'Node.js · REST APIs · API Integration' },
      { name: 'Java · Spring · PHP' },
      { name: 'Python Scripting · C#' },
    ],
  },
  {
    id: 'quality',
    title: 'Testing and quality',
    skills: [
      { name: 'Jest · Unit Testing · Test Refactoring' },
      { name: 'QA Validation · Accessibility Review' },
    ],
  },
  {
    id: 'delivery',
    title: 'Data, cloud, and delivery',
    skills: [
      { name: 'SQL · MySQL · Oracle · MongoDB' },
      { name: 'AWS · Azure · AWS Lambda' },
      { name: 'Git · GitLab · Jenkins · npm · CI/CD Troubleshooting' },
    ],
  },
  {
    id: 'practices',
    title: 'Engineering practices',
    skills: [
      { name: 'Brownfield Development · Application Maintenance' },
      { name: 'Feature-Flagged Delivery · Refactoring' },
      { name: 'Technical Planning · Roadmap Development · COTS Evaluation' },
      { name: 'Documentation' },
    ],
  },
  {
    id: 'ai-workflows',
    title: 'AI-assisted engineering',
    skills: [
      { name: 'Agentic Workflows · Prompt Engineering' },
      { name: 'MCP-Enabled Integrations · Agent Steering Files · Memory Banks' },
      { name: 'Ticket Breakdown · Implementation Planning · Code Analysis' },
    ],
  },
]
