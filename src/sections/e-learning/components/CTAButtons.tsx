import { ArrowRightCircle } from 'lucide-react'
import { IBM_Plex_Mono } from 'next/font/google'
import { styles } from '../styles'
import { CTAButtonsProps } from '../types'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export function CTAButtons({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: CTAButtonsProps) {
  return (
    <div className={styles.buttonContainer}>
      <button
        onClick={onSecondaryClick}
        className={`${ibmPlexMono.className} ${styles.secondaryButton}`}
      >
        {secondaryButtonText}
        <ArrowRightCircle className="w-5 h-5" aria-hidden="true" />
      </button>

      <button
        onClick={onPrimaryClick}
        className={`${ibmPlexMono.className} ${styles.primaryButton}`}
      >
        {primaryButtonText}
      </button>
    </div>
  )
}
