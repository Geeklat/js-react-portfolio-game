import { profileParagraphs } from '../data/profile'
import styles from './Sections.module.css'

export function ProfileSection() {
  return (
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Professional profile</h2>
      {profileParagraphs.length > 0 ? (
        <div className={styles.prose}>
          {profileParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className={styles.pending}>
          Professional content is awaiting authoritative source review.
        </p>
      )}
    </section>
  )
}
