import styles from './Layout.module.css'

type CharacterArtworkProps = {
  kind: 'portrait' | 'detail'
  src: string | null
}

export function CharacterArtwork({ kind, src }: CharacterArtworkProps) {
  const label = 'Portrait of Justin Green'

  if (src) {
    return (
      <img
        className={styles[`${kind}Artwork`]}
        src={src}
        alt={label}
        data-testid={`${kind}-artwork`}
      />
    )
  }

  return (
    <div
      className={`${styles.artworkPlaceholder} ${styles[`${kind}Artwork`]}`}
      role="img"
      aria-label={`${label} placeholder`}
      data-testid={`${kind}-artwork-placeholder`}
    >
      <span aria-hidden="true" />
    </div>
  )
}
