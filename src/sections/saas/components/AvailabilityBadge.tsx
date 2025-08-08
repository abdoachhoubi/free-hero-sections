import { IBM_Plex_Mono } from 'next/font/google'
import { styles } from '../styles'
import { AvailabilityBadgeProps } from '../types'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const AvailabilityBadge = ({ isAvailable, availabilityText }: AvailabilityBadgeProps) => {
  if (!isAvailable) return null

  return (
    <div className={styles.availabilityBadge}>
      <div className={styles.availabilityDot} />
      <span className={`${ibmPlexMono.className} ${styles.availabilityText}`}>
        {availabilityText}
      </span>
    </div>
  )
}
