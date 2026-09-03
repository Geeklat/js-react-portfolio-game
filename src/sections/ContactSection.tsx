import { contact } from '../data/contact'
import { identity } from '../data/profile'
import { ExternalLink } from '../components/ui/ExternalLink'
import styles from './Sections.module.css'

export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.sectionHeading}>
        Contact
      </h2>
      <dl className={styles.contactList}>
        <div>
          <dt>Name</dt>
          <dd>{identity.name}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{identity.location}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>
            <ExternalLink href={contact.linkedInUrl}>{contact.linkedInLabel}</ExternalLink>
          </dd>
        </div>
        {contact.resumeUrl && (
          <div>
            <dt>Résumé</dt>
            <dd>
              <a href={contact.resumeUrl} download>
                Download PDF
              </a>
            </dd>
          </div>
        )}
      </dl>
    </section>
  )
}
