import { styles } from '../styles'
import { MainContentProps } from '../types'
import { AvailabilityBadge } from './AvailabilityBadge'
import { CTAButtons } from './CTAButtons'
import { Description } from './Description'
import { Headline } from './Headline'
import { TrustIndicators } from './TrustIndicators'
import { VisualElement } from './VisualElement'

export const HeroContent = ({
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
      <CTAButtons
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
