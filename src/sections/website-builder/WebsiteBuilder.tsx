'use client'

import { Background } from './components/Background'
import { HeroContent } from './components/HeroContent'
import { HeroImage } from './components/HeroImage'
import { styles } from './styles'
import type { WebsiteBuilderProps } from './types'

/**
 * WebsiteBuilder - Modern tech hero section with 3D robot
 *
 * A sleek hero section featuring:
 * - Light background with subtle gradients
 * - Notification banner with social proof
 * - Large 3D robot illustration
 * - Statistics showcase
 */
export function WebsiteBuilder({
  notificationText,
  notificationCta,
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  onNotificationClick,
  stats,
}: WebsiteBuilderProps) {
  return (
    <section className={styles.section}>
      <Background />

      <HeroContent
        notificationText={notificationText}
        notificationCta={notificationCta}
        headline={headline}
        description={description}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
        onNotificationClick={onNotificationClick}
        stats={stats}
      />

      <HeroImage />
    </section>
  )
}
