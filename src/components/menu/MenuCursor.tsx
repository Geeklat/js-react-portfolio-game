import { artwork } from '../../data/assets'
import styles from '../layout/Layout.module.css'

export function MenuCursor() {
  return (
    <span className={styles.cursor}>
      <img
        className={styles.cursorAsset}
        src={artwork.cursorSrc}
        alt=""
        data-testid="menu-pointer-artwork"
      />
    </span>
  )
}
