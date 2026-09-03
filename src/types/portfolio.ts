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

type Employment = {
  id: string
  employer: string
  role: string
  dates: string
}

export type FeaturedExperience = Employment & {
  summary: string
  achievements: string[]
  technologies: string[]
}

export type EarlierExperience = Employment

export type SkillGroup = {
  id: string
  title: string
  skills: string[]
}
