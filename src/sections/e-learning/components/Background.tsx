import { styles } from '../styles'

export function Background() {
  return (
    <div className="absolute inset-0">
      <div className={styles.backgroundBlob1} />
      <div className={styles.backgroundBlob2} />
    </div>
  )
}
