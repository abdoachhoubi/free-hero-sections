"use client";

import { Background } from "./components/Background";
import { FloatAnimation } from "./components/FloatAnimation";
import { HeroContent } from "./components/HeroContent";
import { styles } from "./styles";
import { SaasProps } from "./types";

/**
 * Saas - Modern dark hero section with 3D abstract element
 *
 * A sophisticated hero section featuring:
 * - Dark gradient background with violet accents
 * - Availability status badge
 * - Large headline with call-to-action buttons
 * - Abstract 3D visual element
 */
export const Saas = ({
  isAvailable,
  availabilityText,
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: SaasProps) => {
  return (
    <section className={styles.section}>
      <Background />
      <HeroContent
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
  );
};

export default Saas;
