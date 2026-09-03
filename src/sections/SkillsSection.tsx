import { skillGroups } from '../data/skills'
import styles from './Sections.module.css'

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      {skillGroups.length === 0 ? (
        <p className={styles.pending}>Skills content is awaiting authoritative source review.</p>
      ) : (
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <section key={group.id}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <strong>{skill.name}</strong>
                    {skill.evidence && <p>{skill.evidence}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
