import { earlierExperience, featuredExperience } from '../data/experience'
import type { FeaturedExperience } from '../types/portfolio'
import styles from './Sections.module.css'

function FeaturedRole({ role }: { role: FeaturedExperience }) {
  return (
    <article className={styles.featuredRole}>
      <header>
        <div>
          <p>{role.employer}</p>
          <h3>{role.role}</h3>
        </div>
        <time>{role.dates}</time>
      </header>
      {role.summary && <p>{role.summary}</p>}
      {role.achievements.length > 0 && (
        <ul>
          {role.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {role.technologies.length > 0 && (
        <ul className={styles.tags} aria-label="Technologies">
          {role.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function WorkSection() {
  return (
    <section aria-labelledby="work-heading">
      <h2 id="work-heading">Professional experience</h2>
      <div className={styles.featuredList}>
        {featuredExperience.map((role) => (
          <FeaturedRole key={role.id} role={role} />
        ))}
      </div>
      <section className={styles.earlier} aria-labelledby="earlier-heading">
        <h3 id="earlier-heading">Earlier experience</h3>
        <ol>
          {earlierExperience.map((role) => (
            <li key={role.id}>
              <div>
                <strong>{role.role}</strong>
                <span>{role.employer}</span>
              </div>
              <time>{role.dates}</time>
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}
