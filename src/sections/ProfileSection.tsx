import { profileParagraphs } from '../data/profile'
import styles from './Sections.module.css'

export function ProfileSection() {
  return (
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading" className={styles.sectionHeading}>
        Professional profile
      </h2>
      <div className={styles.prose}>
        {profileParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
