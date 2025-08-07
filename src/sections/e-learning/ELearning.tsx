"use client";

import { Background } from "./components/Background";
import { BottomSection } from "./components/BottomSection";
import { HeroContent } from "./components/HeroContent";
import { UserTestimonials } from "./components/UserTestimonials";
import { backgroundPattern, styles } from "./styles";
import { ELearningProps } from "./types";

/**
 * ELearning - Clean educational platform hero section
 *
 * A bright, clean hero section featuring:
 * - Light background with subtle gradients
 * - Educational app interface mockups
 * - User testimonials and ratings
 * - Floating app icons and study materials
 */
export function ELearning({
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  rating,
  reviewCount,
  userAvatars,
}: ELearningProps) {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      <section style={backgroundPattern} className={styles.section}>
        <Background />

        <div className={styles.mainContainer}>
          <HeroContent
            headline={headline}
            description={description}
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
            onPrimaryClick={onPrimaryClick}
            onSecondaryClick={onSecondaryClick}
          />

          <UserTestimonials
            rating={rating}
            reviewCount={reviewCount}
            userAvatars={userAvatars}
          />

          <BottomSection />
        </div>
      </section>
    </>
  );
}
