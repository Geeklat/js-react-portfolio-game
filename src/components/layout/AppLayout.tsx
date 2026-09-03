import type { ReactNode } from 'react'
import { artwork } from '../../data/assets'
import type { SectionId } from '../../types/portfolio'
import { CharacterCard } from './CharacterCard'
import { CharacterArtwork } from './CharacterArtwork'
import { CommandMenu } from '../menu/CommandMenu'
import { GameWindow } from '../ui/GameWindow'
import styles from './Layout.module.css'

type AppLayoutProps = {
  activeSection: SectionId | null
  activeLabel: string | null
  enteredFromPartyScreen: boolean
  onSelect: (section: SectionId) => void
  children: ReactNode
}

export function AppLayout({
  activeSection,
  activeLabel,
  enteredFromPartyScreen,
  onSelect,
  children,
}: AppLayoutProps) {
  const detailMode = activeSection !== null
  return (
    <>
      <div className={styles.background} aria-hidden="true" />
      <main
        id="main-content"
        tabIndex={-1}
        className={`${styles.appMain} ${detailMode ? styles.detailMain : styles.partyMain}`}
      >
        <div
          className={`${styles.shell} ${detailMode ? styles.detailMode : styles.partyMode} ${enteredFromPartyScreen ? styles.enteringDetail : ''}`}
          data-screen={detailMode ? 'detail' : 'party'}
        >
          {detailMode ? (
            <GameWindow className={styles.detailHeader} aria-labelledby="detail-title">
              <div className={styles.detailHeading}>
                <div>
                  <p>Portfolio</p>
                  <h1 id="detail-title">{activeLabel}</h1>
                </div>
                <CharacterArtwork kind="detail" src={artwork.detailSrc} />
              </div>
            </GameWindow>
          ) : (
            <CharacterCard />
          )}

          <CommandMenu activeSection={activeSection} onSelect={onSelect} />

          {detailMode && (
            <GameWindow className={styles.contentPanel} aria-label={`${activeLabel} content`}>
              <div className={styles.contentRegion}>{children}</div>
            </GameWindow>
          )}
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {activeLabel ? `${activeLabel} section selected` : ''}
        </p>
      </main>
    </>
  )
}
