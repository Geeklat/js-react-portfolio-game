import { useEffect, useRef, useState } from 'react'
import { navigation } from '../../data/navigation'
import type { SectionId } from '../../types/portfolio'
import { GameWindow } from '../ui/GameWindow'
import styles from '../layout/Layout.module.css'
import { MenuCursor } from './MenuCursor'

type CommandMenuProps = {
  activeSection: SectionId | null
  onSelect: (section: SectionId) => void
}

export function CommandMenu({ activeSection, onSelect }: CommandMenuProps) {
  const listRef = useRef<HTMLUListElement>(null)
  const didSetInitialFocus = useRef(false)
  const [focusedSection, setFocusedSection] = useState<SectionId | null>(
    activeSection ?? navigation[0].id,
  )

  useEffect(() => {
    if (didSetInitialFocus.current) return
    const initialSection = activeSection ?? navigation[0].id
    listRef.current?.querySelector<HTMLAnchorElement>(`[data-section="${initialSection}"]`)?.focus()
    didSetInitialFocus.current = true
  }, [activeSection])

  function onKeyDown(event: React.KeyboardEvent) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const links = Array.from(listRef.current?.querySelectorAll('a') ?? [])
    if (links.length === 0) return
    const current = links.indexOf(document.activeElement as HTMLAnchorElement)
    const fallback = event.key === 'ArrowUp' || event.key === 'End' ? links.length - 1 : 0
    const next =
      current === -1
        ? fallback
        : event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? links.length - 1
            : (current + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length
    links[next]?.focus()
  }
  return (
    <GameWindow
      title="Command"
      as="nav"
      aria-label="Portfolio sections"
      className={styles.commandPanel}
    >
      <ul ref={listRef} className={styles.menu} onKeyDown={onKeyDown}>
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.hash}
              data-section={item.id}
              aria-current={item.id === activeSection ? 'page' : undefined}
              onFocus={() => setFocusedSection(item.id)}
              onBlur={() => setFocusedSection(null)}
              onClick={() => onSelect(item.id)}
            >
              <span className={styles.cursorSlot} aria-hidden="true">
                {focusedSection === item.id && <MenuCursor />}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.menuHint}>↑ ↓ choose · Enter confirm</p>
    </GameWindow>
  )
}
