export type SectionId = 'profile' | 'work' | 'skills' | 'contact'

export type NavigationItem = {
  id: SectionId
  label: string
  hash: `#${SectionId}`
}

export type ProfessionalIdentity = {
  name: string
  role: string
  level: string
  location: string
  email: string
  linkedInLabel: string
  linkedInUrl: string
}

export type Experience = {
  id: string
  employer: string
  role: string
  dates: string
  summary: string
  achievements: string[]
  technologies: string[]
}
export type SkillGroup = {
  id: string
  title: string
  skills: Array<{
    name: string
    evidence?: string
  }>
}
