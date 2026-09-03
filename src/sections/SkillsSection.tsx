import { skillGroups } from '../data/skills'
import styles from './Sections.module.css'

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.sectionHeading}>
        Skills
      </h2>
      <div className={styles.skillGrid}>
        {skillGroups.map((group) => (
          <section key={group.id}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <strong>{skill}</strong>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
