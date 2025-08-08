import { styles } from '../styles'

export function Background() {
  return (
    <div className={styles.backgroundDecorations.container} aria-hidden="true">
      <div className={styles.backgroundDecorations.circle1} />
      <div className={styles.backgroundDecorations.circle2} />
    </div>
  )
}
