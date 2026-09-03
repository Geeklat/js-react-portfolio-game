import type { AnchorHTMLAttributes, ReactNode } from 'react'
export function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  const opensNewTab = !props.href?.startsWith('mailto:')
  return (
    <a
      {...props}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noreferrer' : undefined}
    >
      {children}
      {opensNewTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
