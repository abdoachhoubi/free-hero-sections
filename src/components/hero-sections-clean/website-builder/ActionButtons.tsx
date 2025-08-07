"use client";

import { ArrowRight } from "lucide-react";

/**
 * Props for the ActionButtons component
 */
export interface ActionButtonsProps {
  /** Text for the primary (filled) button */
  primaryText: string;
  /** Text for the secondary (outlined) button */
  secondaryText: string;
  /** Callback function triggered when primary button is clicked */
  onPrimaryClick: () => void;
  /** Callback function triggered when secondary button is clicked */
  onSecondaryClick: () => void;
}

/**
 * ActionButtons - Dual action button group for hero sections
 *
 * A responsive button pair featuring a primary filled button and secondary outlined button.
 * Features:
 * - Primary button with dark/light theme inversion
 * - Secondary button with subtle border styling
 * - Animated arrow icons on hover
 * - Full keyboard accessibility
 * - Responsive sizing and positioning
 * - Consistent focus states
 *
 * @example
 * ```tsx
 * <ActionButtons
 *   primaryText="Get Started"
 *   secondaryText="Learn More"
 *   onPrimaryClick={() => console.log('Primary clicked')}
 *   onSecondaryClick={() => console.log('Secondary clicked')}
 * />
 * ```
 */
export default function ActionButtons({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-center lg:justify-start gap-4">
      <button
        onClick={onPrimaryClick}
        className="flex items-center justify-center gap-4 rounded-full cursor-pointer bg-slate-300 dark:bg-white text-slate-900 dark:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-100 px-6 sm:px-8 py-3 text-base sm:text-lg group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200"
      >
        {primaryText}
        <ArrowRight
          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200"
          aria-hidden="true"
        />
      </button>
      <button
        onClick={onSecondaryClick}
        className="flex items-center justify-center gap-4 rounded-full cursor-pointer border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200"
      >
        {secondaryText}
      </button>
    </div>
  );
}
