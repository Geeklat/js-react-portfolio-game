import { useEffect, useState, type ReactNode } from 'react'
import { AppLayout } from './components/layout/AppLayout'
import { navigation } from './data/navigation'
import { identity } from './data/profile'
import { useSectionHash } from './hooks/useSectionHash'
import { ContactSection } from './sections/ContactSection'
import { ProfileSection } from './sections/ProfileSection'
import { SkillsSection } from './sections/SkillsSection'
import { WorkSection } from './sections/WorkSection'
import type { SectionId } from './types/portfolio'

const sections: Record<SectionId, ReactNode> = {
  profile: <ProfileSection />,
  work: <WorkSection />,
  skills: <SkillsSection />,
  contact: <ContactSection />,
}

export function App() {
  const { activeSection, selectSection } = useSectionHash()
  const [enteredFromPartyScreen, setEnteredFromPartyScreen] = useState(false)
  const activeLabel = navigation.find((item) => item.id === activeSection)?.label ?? null

  useEffect(() => {
    document.title = activeLabel
      ? `${identity.name} — ${activeLabel}`
      : `${identity.name} — ${identity.role}`
  }, [activeLabel])

  function handleSelect(section: SectionId) {
    if (activeSection === null) setEnteredFromPartyScreen(true)
    selectSection(section)
  }

  return (
    <AppLayout
      activeSection={activeSection}
      activeLabel={activeLabel}
      enteredFromPartyScreen={enteredFromPartyScreen}
      onSelect={handleSelect}
    >
      {activeSection ? sections[activeSection] : null}
    </AppLayout>
  )
}
