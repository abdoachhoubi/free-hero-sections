'use client'

import { Funnel_Display, IBM_Plex_Mono } from 'next/font/google'
import Image from 'next/image'

const funnelDisplay = Funnel_Display({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

// Styles object for better maintainability
const styles = {
  section:
    'relative h-screen bg-gradient-to-br from-violet-50 via-violet-300 to-violet-50 dark:from-violet-950 dark:via-violet-950 dark:to-violet-950 overflow-hidden',
  backgroundContainer: 'absolute inset-0',
  gridPattern:
    "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30",
  diagonalLine1:
    'absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-violet-400/30 to-transparent transform rotate-12 origin-top',
  diagonalLine2:
    'absolute top-0 left-1/3 w-px h-2/3 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent transform -rotate-12 origin-top',
  mainContainer: 'relative z-10 flex items-center h-full px-[10%]',
  contentContainer: 'flex-1 space-y-6 sm:space-y-8 text-center lg:text-left',
  availabilityBadge:
    'inline-flex items-center justify-center lg:justify-start space-x-2 bg-green-400/40 dark:bg-green-400/10 border border-green-400/80 dark:border-green-400/20 rounded-full px-4 py-2 backdrop-blur-sm',
  availabilityDot: 'w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse',
  availabilityText: 'text-green-600 dark:text-green-400 text-sm font-medium',
  headline: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight',
  headlineGradient:
    'bg-gradient-to-r from-violet-950 via-violet-500 to-violet-800 dark:from-violet-50 dark:via-violet-200 dark:to-violet-50 bg-clip-text text-transparent',
  description:
    'text-violet-950 dark:text-violet-50/80 text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-lg leading-relaxed mx-auto lg:mx-0 font-light',
  buttonGroup: 'flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4',
  primaryButton:
    'group relative cursor-pointer bg-violet-950 dark:bg-violet-100 text-violet-50 dark:text-violet-950 hover:bg-violet-950/90 px-8 sm:px-10 py-4 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-50/25',
  secondaryButton:
    'group relative cursor-pointer border-2 border-violet-950/30 dark:border-violet-50/30 text-violet-950 dark:text-violet-50 hover:border-violet-950/50 hover:dark:border-violet-50/50 px-8 sm:px-10 py-4 text-base bg-violet-50/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 hover:bg-violet-50/10',
  secondaryButtonOverlay:
    'absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-0 dark:group-hover:opacity-100 rounded-xl transition-opacity duration-300',
  buttonText: 'relative z-10',
  trustIndicators:
    'flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-violet-950/60 dark:text-violet-50/60 text-sm',
  trustItem: 'flex items-center space-x-2',
  trustDot: 'w-1 h-1 bg-violet-950/40 dark:bg-violet-50/40 rounded-full',
  visualContainer: 'h-[80%] relative flex flex-1 justify-center lg:justify-end mt-8 lg:mt-0',
  glowEffect:
    'absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-3xl blur-3xl scale-110',
  image: 'animate-pulse w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl',
  bottomGradient:
    'absolute hidden dark:block bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-950 via-violet-950/50 to-transparent dark:from-violet-950 dark:via-violet-950/50',
}

interface SaasProps {
  brandName: string
  isAvailable: boolean
  availabilityText: string
  headline: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

// Background decoration component
const BackgroundDecorations = () => (
  <div className={styles.backgroundContainer}>
    <div className={styles.gridPattern} />
    <div className={styles.diagonalLine1} />
    <div className={styles.diagonalLine2} />
  </div>
)

// Availability badge component
interface AvailabilityBadgeProps {
  isAvailable: boolean
  availabilityText: string
}

const AvailabilityBadge = ({ isAvailable, availabilityText }: AvailabilityBadgeProps) => {
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

// Main headline component
interface HeadlineProps {
  headline: string
}

const Headline = ({ headline }: HeadlineProps) => (
  <h1 className={styles.headline}>
    <span className={`${styles.headlineGradient} ${funnelDisplay.className}`}>{headline}</span>
  </h1>
)

// Description component
interface DescriptionProps {
  description: string
}

const Description = ({ description }: DescriptionProps) => (
  <p className={`${ibmPlexMono.className} ${styles.description}`}>{description}</p>
)

// Button component
interface ButtonProps {
  text: string
  onClick: () => void
  variant: 'primary' | 'secondary'
}

const Button = ({ text, onClick, variant }: ButtonProps) => (
  <button
    onClick={onClick}
    className={variant === 'primary' ? styles.primaryButton : styles.secondaryButton}
  >
    <span className={`${ibmPlexMono.className} ${styles.buttonText}`}>{text}</span>
    {variant === 'secondary' && <div className={styles.secondaryButtonOverlay} />}
  </button>
)

// Button group component
interface ButtonGroupProps {
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

const ButtonGroup = ({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: ButtonGroupProps) => (
  <div className={styles.buttonGroup}>
    <Button text={primaryButtonText} onClick={onPrimaryClick} variant="primary" />
    <Button text={secondaryButtonText} onClick={onSecondaryClick} variant="secondary" />
  </div>
)

// Trust indicators component
const TrustIndicators = () => {
  const indicators = ['Trusted by 10k+ users', '99.9% uptime', '24/7 support']

  return (
    <div className={styles.trustIndicators}>
      {indicators.map((text, index) => (
        <div key={index} className={styles.trustItem}>
          <div className={styles.trustDot} />
          <span className={ibmPlexMono.className}>{text}</span>
        </div>
      ))}
    </div>
  )
}

// Visual element component
const VisualElement = () => (
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

// Float animation styles
const FloatAnimation = () => (
  <style jsx>{`
    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `}</style>
)

// Main content component
interface MainContentProps {
  isAvailable: boolean
  availabilityText: string
  headline: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

const MainContent = ({
  isAvailable,
  availabilityText,
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: MainContentProps) => (
  <div className={styles.mainContainer}>
    <div className={styles.contentContainer}>
      <AvailabilityBadge isAvailable={isAvailable} availabilityText={availabilityText} />
      <Headline headline={headline} />
      <Description description={description} />
      <ButtonGroup
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
      <TrustIndicators />
    </div>
    <VisualElement />
  </div>
)

/**
 * Saas - Modern dark hero section with 3D abstract element
 *
 * A sophisticated hero section featuring:
 * - Dark gradient background with violet accents
 * - Availability status badge
 * - Large headline with call-to-action buttons
 * - Abstract 3D visual element
 */
export default function Saas({
  isAvailable,
  availabilityText,
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: SaasProps) {
  return (
    <section className={styles.section}>
      <BackgroundDecorations />
      <MainContent
        isAvailable={isAvailable}
        availabilityText={availabilityText}
        headline={headline}
        description={description}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
      <div className={styles.bottomGradient} />
      <FloatAnimation />
    </section>
  )
}
