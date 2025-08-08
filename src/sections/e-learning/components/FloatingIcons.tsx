import Image from 'next/image'
import { styles } from '../styles'

const iconConfig = [
  {
    src: '/logo/vue-9.svg',
    alt: 'Vue',
    position: 'top-1/6 left-1/6 lg:top-1/4 lg:left-1/3',
    delay: '.2s',
  },
  {
    src: '/logo/nestjs.svg',
    alt: 'NestJS',
    position: 'top-1/6 right-1/6 lg:top-1/2 lg:left-1/2',
    delay: '1s',
  },
  {
    src: '/logo/tensorflow-2.svg',
    alt: 'TensorFlow',
    position: 'top-1/3 left-1/3 lg:top-3/4 lg:left-1/3',
    delay: '0s',
  },
  {
    src: '/logo/react-2.svg',
    alt: 'React',
    position: 'top-1/3 right-1/3 lg:top-1/2 lg:right-1/4',
    delay: '.8s',
  },
  {
    src: '/logo/git-icon.svg',
    alt: 'Git',
    position: 'top-1/2 left-1/6 lg:right-1/3',
    delay: '.4s',
  },
  {
    src: '/logo/postgresql.svg',
    alt: 'PostgreSQL',
    position: 'top-1/2 right-1/6 lg:top-12 lg:left-1/2',
    delay: '.6s',
  },
]

export function FloatingIcons() {
  return (
    <div className={styles.iconsContainer}>
      {iconConfig.map((icon, index) => (
        <Image
          key={index}
          className={`${styles.floatingIcon} ${icon.position}`}
          style={{
            animation: 'float 3s ease-in-out infinite',
            animationDelay: icon.delay,
          }}
          src={icon.src}
          alt={icon.alt}
          width={0}
          height={0}
        />
      ))}
    </div>
  )
}
