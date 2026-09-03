import { artwork } from '../../data/assets'
import styles from '../layout/Layout.module.css'

export function MenuCursor() {
  return (
    <span className={styles.cursor}>
      {artwork.cursorSrc ? (
        <img
          className={styles.cursorAsset}
          src={artwork.cursorSrc}
          alt=""
          data-testid="menu-pointer-artwork"
        />
      ) : (
        <span className={styles.cursorPlaceholder} />
      )}
    </span>
  )
}
