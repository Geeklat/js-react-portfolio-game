import { useCallback, useEffect, useState } from 'react'
import { navigation } from '../data/navigation'
import type { SectionId } from '../types/portfolio'

function sectionFromHash(hash: string): SectionId | null {
  const match = navigation.find((item) => item.hash === hash.toLowerCase())
  return match?.id ?? null
}

export function useSectionHash() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(() =>
    sectionFromHash(window.location.hash),
  )

  useEffect(() => {
    const syncFromLocation = () => setActiveSection(sectionFromHash(window.location.hash))
    window.addEventListener('hashchange', syncFromLocation)
    return () => window.removeEventListener('hashchange', syncFromLocation)
  }, [])

  const selectSection = useCallback((section: SectionId) => {
    setActiveSection(section)
  }, [])

  return { activeSection, selectSection }
}
