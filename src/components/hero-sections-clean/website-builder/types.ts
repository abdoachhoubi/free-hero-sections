/**
 * Shared types for WebsiteBuilder components
 */

/**
 * Individual statistic item
 */
export interface Stat {
  /** The numerical or text value to display prominently (e.g., "10K+", "99.9%") */
  value: string;
  /** Descriptive label explaining what the value represents */
  label: string;
}

/**
 * Common callback function type for button interactions
 */
export type ButtonClickHandler = () => void;

/**
 * Theme-aware component props for consistent styling
 */
export interface ThemeAwareProps {
  /** Optional className override for custom styling */
  className?: string;
}

/**
 * Base props for interactive components
 */
export interface InteractiveComponentProps extends ThemeAwareProps {
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Loading state for async operations */
  loading?: boolean;
}
