"use client";

import Image from "next/image";
import ActionButtons from "./ActionButtons";
import BackgroundDecorations from "./BackgroundDecorations";
import NotificationBanner from "./NotificationBanner";
import Statistics, { type Stat } from "./Statistics";

/**
 * Props for the WebsiteBuilder component
 */
export interface WebsiteBuilderProps {
  /** Text content for the notification banner */
  notificationText: string;
  /** Call-to-action text for the notification banner */
  notificationCta: string;
  /** Main headline text */
  headline: string;
  /** Descriptive text below the headline */
  description: string;
  /** Text for the primary action button */
  primaryButtonText: string;
  /** Text for the secondary action button */
  secondaryButtonText: string;
  /** Callback when primary button is clicked */
  onPrimaryClick: () => void;
  /** Callback when secondary button is clicked */
  onSecondaryClick: () => void;
  /** Callback when notification banner is clicked */
  onNotificationClick: () => void;
  /** Array of statistics to display */
  stats: Stat[];
}

/**
 * WebsiteBuilder - Modern tech hero section with 3D robot
 *
 * A comprehensive hero section component designed for modern tech websites.
 * Combines multiple sub-components to create an engaging landing experience.
 *
 * Features:
 * - Responsive full-height layout
 * - Light/dark theme support with gradient backgrounds
 * - Interactive notification banner with social proof
 * - Large typography with excellent readability
 * - Dual call-to-action buttons
 * - Statistics showcase
 * - 3D robot illustration
 * - Subtle background decorations
 * - Full keyboard accessibility
 * - Semantic HTML structure
 *
 * Layout:
 * - Mobile: Stacked vertical layout
 * - Desktop: Split layout with content on left, image on right
 * - Background: Subtle gradient with decorative blur elements
 *
 * @example
 * ```tsx
 * <WebsiteBuilder
 *   notificationText="🎉 Join 10,000+ users"
 *   notificationCta="See what's new"
 *   headline="Build Amazing Websites with AI"
 *   description="Create stunning websites in minutes, not hours. Our AI-powered platform makes web development accessible to everyone."
 *   primaryButtonText="Start Building"
 *   secondaryButtonText="Watch Demo"
 *   onPrimaryClick={() => router.push('/signup')}
 *   onSecondaryClick={() => setShowDemo(true)}
 *   onNotificationClick={() => router.push('/updates')}
 *   stats={[
 *     { value: "10K+", label: "Websites created" },
 *     { value: "99.9%", label: "Uptime" },
 *     { value: "24/7", label: "Support" }
 *   ]}
 * />
 * ```
 */
export default function WebsiteBuilder({
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
    <section className="relative lg:h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <BackgroundDecorations />

      {/* Main content container */}
      <div className="z-10 flex flex-col w-full px-[10%]">
        <header className="text-center lg:text-left h-full lg:w-[60%] flex flex-col gap-8">
          <NotificationBanner
            text={notificationText}
            cta={notificationCta}
            onClick={onNotificationClick}
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            {headline}
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-lg leading-relaxed">
            {description}
          </p>

          <ActionButtons
            primaryText={primaryButtonText}
            secondaryText={secondaryButtonText}
            onPrimaryClick={onPrimaryClick}
            onSecondaryClick={onSecondaryClick}
          />

          <Statistics stats={stats} />
        </header>
      </div>

      {/* Hero image */}
      <figure className="lg:absolute lg:bottom-0 lg:right-[2%]">
        <Image
          className="w-full h-auto lg:h-[90vh] lg:w-auto"
          src="/robot.png"
          alt="3D robot illustration representing modern technology and AI-powered website building"
          width={400}
          height={400}
          priority
        />
      </figure>
    </section>
  );
}
