import { IBM_Plex_Mono } from 'next/font/google'
import { styles } from '../styles'
import { ButtonProps } from '../types'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const Button = ({ text, onClick, variant }: ButtonProps) => (
  <button
    onClick={onClick}
    className={variant === 'primary' ? styles.primaryButton : styles.secondaryButton}
  >
    <span className={`${ibmPlexMono.className} ${styles.buttonText}`}>{text}</span>
    {variant === 'secondary' && <div className={styles.secondaryButtonOverlay} />}
  </button>
)
