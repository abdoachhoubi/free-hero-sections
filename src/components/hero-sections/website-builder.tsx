'use client'

import { ArrowRight, Users } from 'lucide-react'
import Image from 'next/image'

interface Stat {
  value: string
  label: string
}

interface WebsiteBuilderProps {
  notificationText: string
  notificationCta: string
  headline: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
  onNotificationClick: () => void
  stats: Stat[]
}

// Styles object for better maintainability
const styles = {
  section:
    'relative lg:h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden',

  backgroundDecorations: {
    container: 'absolute inset-0',
    circle1:
      'absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-200/50 dark:bg-slate-700/20 rounded-full blur-3xl',
    circle2:
      'absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-slate-300/30 dark:bg-slate-600/20 rounded-full blur-2xl',
  },

  notification: {
    button:
      'cursor-pointer flex items-center w-fit gap-4 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white p-1 pr-6 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 group text-sm sm:text-base',
    badge: 'flex items-center gap-2 py-2 px-3 rounded-full bg-slate-200 dark:bg-slate-700',
    icon: 'w-5 h-5 sm:w-4 sm:h-4',
    text: 'font-medium text-sm',
    cta: 'font-medium text-slate-700 dark:text-white dark:group-hover:text-white group-hover:text-slate-900',
    arrow: 'w-5 h-5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200',
  },

  buttons: {
    container: 'flex justify-center lg:justify-start gap-4',
    primary:
      'flex items-center justify-center gap-4 rounded-full cursor-pointer bg-slate-300 dark:bg-white text-slate-900 dark:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-100 px-6 sm:px-8 py-3 text-base sm:text-lg group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200',
    secondary:
      'flex items-center justify-center gap-4 rounded-full cursor-pointer border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200',
    arrow: 'w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200',
  },

  statistics: {
    container: 'flex justify-evenly py-4 w-fit gap-8',
    item: 'text-center lg:text-left px-2 flex flex-col gap-2',
    value: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white',
    label: 'text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base',
  },

  content: {
    container: 'z-10 flex flex-col w-full px-[10%]',
    header: 'text-center lg:text-left h-full lg:w-[60%] flex flex-col gap-8',
    headline:
      'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight',
    description:
      'text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-lg leading-relaxed',
  },

  image: {
    figure: 'lg:absolute lg:bottom-0 lg:right-[2%]',
    img: 'w-full h-auto lg:h-[90vh] lg:w-auto',
  },
}

// Notification Banner Component
function NotificationBanner({
  text,
  cta,
  onClick,
}: {
  text: string
  cta: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={styles.notification.button}
      aria-label={`${text} - ${cta}`}
    >
      <div className={styles.notification.badge}>
        <Users className={styles.notification.icon} aria-hidden="true" />
        <span className={styles.notification.text}>{text}</span>
      </div>
      <span className={styles.notification.cta}>{cta}</span>
      <ArrowRight className={styles.notification.arrow} aria-hidden="true" />
    </button>
  )
}

// Action Buttons Component
function ActionButtons({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}: {
  primaryText: string
  secondaryText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}) {
  return (
    <div className={styles.buttons.container}>
      <button onClick={onPrimaryClick} className={styles.buttons.primary}>
        {primaryText}
        <ArrowRight className={styles.buttons.arrow} aria-hidden="true" />
      </button>
      <button onClick={onSecondaryClick} className={styles.buttons.secondary}>
        {secondaryText}
      </button>
    </div>
  )
}

// Statistics Component
function Statistics({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null

  return (
    <div className={styles.statistics.container} role="group" aria-label="Statistics">
      {stats.map((stat, index) => (
        <div key={`${stat.value}-${index}`} className={styles.statistics.item}>
          <div className={styles.statistics.value}>{stat.value}</div>
          <div className={styles.statistics.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

// Background Decorations Component
function BackgroundDecorations() {
  return (
    <div className={styles.backgroundDecorations.container} aria-hidden="true">
      <div className={styles.backgroundDecorations.circle1} />
      <div className={styles.backgroundDecorations.circle2} />
    </div>
  )
}

/**
 * WebsiteBuilder - Modern tech hero section with 3D robot
 *
 * A sleek hero section featuring:
 * - Light background with subtle gradients
 * - Notification banner with social proof
 * - Large 3D robot illustration
 * - Statistics showcase
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
    <section className={styles.section}>
      <BackgroundDecorations />

      {/* Main content container */}
      <div className={styles.content.container}>
        <header className={styles.content.header}>
          <NotificationBanner
            text={notificationText}
            cta={notificationCta}
            onClick={onNotificationClick}
          />

          <h1 className={styles.content.headline}>{headline}</h1>

          <p className={styles.content.description}>{description}</p>

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
      <figure className={styles.image.figure}>
        <Image
          className={styles.image.img}
          src="/robot.png"
          alt="3D robot illustration representing modern technology"
          width={400}
          height={400}
          priority
        />
      </figure>
    </section>
  )
}
