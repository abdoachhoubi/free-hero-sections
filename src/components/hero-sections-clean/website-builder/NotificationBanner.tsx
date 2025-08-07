"use client";

import { ArrowRight, Users } from "lucide-react";

/**
 * Props for the NotificationBanner component
 */
export interface NotificationBannerProps {
  /** The main notification text to display */
  text: string;
  /** Call-to-action text that appears after the main text */
  cta: string;
  /** Callback function triggered when the banner is clicked */
  onClick: () => void;
}

/**
 * NotificationBanner - Interactive notification banner with social proof
 *
 * A clickable notification banner that displays announcement text with a call-to-action.
 * Features:
 * - Dark theme with hover effects
 * - Users icon for social proof
 * - Animated arrow on hover
 * - Fully accessible with keyboard navigation
 * - Responsive text sizing
 *
 * @example
 * ```tsx
 * <NotificationBanner
 *   text="🎉 Join 10,000+ users"
 *   cta="Learn more"
 *   onClick={() => console.log('Banner clicked')}
 * />
 * ```
 */
export default function NotificationBanner({
  text,
  cta,
  onClick,
}: NotificationBannerProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center w-fit gap-4 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white p-1 pr-6 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 group text-sm sm:text-base"
      aria-label={`${text} - ${cta}`}
    >
      <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-slate-200 dark:bg-slate-700">
        <Users className="w-5 h-5 sm:w-4 sm:h-4" aria-hidden="true" />
        <span className="font-medium text-sm">{text}</span>
      </div>
      <span className="font-medium text-slate-700 dark:text-white dark:group-hover:text-white group-hover:text-slate-900">
        {cta}
      </span>
      <ArrowRight
        className="w-5 h-5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200"
        aria-hidden="true"
      />
    </button>
  );
}
