import Image from 'next/image'
import { styles } from '../styles'

export const VisualElement = () => (
  <div className={styles.visualContainer}>
    <div className={styles.glowEffect} />
    <Image
      className={styles.image}
      style={{ animation: 'float 3s ease-in-out infinite' }}
      src="/glass.png"
      alt="Glass"
      width={1000}
      height={1000}
    />
  </div>
)
