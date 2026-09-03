import styles from './Layout.module.css'

type CharacterArtworkProps = {
  kind: 'portrait' | 'detail'
  src: string
}

export function CharacterArtwork({ kind, src }: CharacterArtworkProps) {
  const label = 'Portrait of Justin Green'

  return (
    <div className={`${styles.artWell} ${styles[`${kind}ArtWell`]}`}>
      <img
        className={styles[`${kind}Artwork`]}
        src={src}
        alt={label}
        data-testid={`${kind}-artwork`}
      />
    </div>
  )
}
