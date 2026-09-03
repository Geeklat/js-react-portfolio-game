import { artwork } from '../../data/assets'
import { identity } from '../../data/profile'
import { ExternalLink } from '../ui/ExternalLink'
import { GameWindow } from '../ui/GameWindow'
import { CharacterArtwork } from './CharacterArtwork'
import styles from './Layout.module.css'

export function CharacterCard() {
  return (
    <GameWindow title="Status" as="section" className={styles.characterPanel}>
      <h1 className="sr-only">Justin Green — Software Engineer portfolio</h1>
      <div className={styles.statusLayout}>
        <CharacterArtwork kind="portrait" src={artwork.portraitSrc} />
        <div className={styles.statusDetails}>
          <dl className={`${styles.identityList} ${styles.primaryIdentity}`}>
            <div>
              <dt>Name</dt>
              <dd>{identity.name}</dd>
            </div>
            <div>
              <dt>Class</dt>
              <dd>{identity.role}</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>{identity.level}</dd>
            </div>
          </dl>
          <dl className={`${styles.identityList} ${styles.secondaryIdentity}`}>
            <div>
              <dt>Location</dt>
              <dd>{identity.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${identity.email}`}>{identity.email}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <ExternalLink href={identity.linkedInUrl}>{identity.linkedInLabel}</ExternalLink>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </GameWindow>
  )
}
