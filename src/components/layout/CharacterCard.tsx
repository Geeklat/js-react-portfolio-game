import { artwork } from '../../data/assets'
import { identity } from '../../data/profile'
import { ExternalLink } from '../ui/ExternalLink'
import { GameWindow } from '../ui/GameWindow'
import { CharacterArtwork } from './CharacterArtwork'
import styles from './Layout.module.css'

export function CharacterCard() {
  return (
    <GameWindow title="Status" as="section" className={styles.characterPanel}>
      <CharacterArtwork kind="portrait" src={artwork.portraitSrc} />
      <dl className={styles.identityList}>
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
    </GameWindow>
  )
}
