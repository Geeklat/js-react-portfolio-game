import type { HTMLAttributes, ReactNode } from 'react'
import styles from './GameWindow.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  title?: string
  children: ReactNode
  as?: 'section' | 'aside' | 'nav' | 'div'
}
export function GameWindow({
  title,
  children,
  as: Tag = 'section',
  className = '',
  ...props
}: Props) {
  return (
    <Tag className={`${styles.window} ${className}`} {...props}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.inner}>{children}</div>
    </Tag>
  )
}
