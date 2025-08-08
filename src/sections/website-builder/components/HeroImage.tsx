import Image from 'next/image'
import { styles } from '../styles'

export function HeroImage() {
  return (
    <figure className={styles.image.figure}>
      <Image
        className={styles.image.img}
        src="/robot.png"
        alt="3D robot illustration representing modern technology"
        width={400}
        height={400}
        priority
      />
    </figure>
  )
}
