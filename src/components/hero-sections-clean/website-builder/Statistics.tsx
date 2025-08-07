"use client";

/**
 * Individual statistic item
 */
export interface Stat {
  /** The numerical or text value to display prominently */
  value: string;
  /** Descriptive label explaining what the value represents */
  label: string;
}

/**
 * Props for the Statistics component
 */
export interface StatisticsProps {
  /** Array of statistics to display */
  stats: Stat[];
}

/**
 * Statistics - Showcase key metrics and achievements
 *
 * A horizontal display of statistics with large prominent values and descriptive labels.
 * Features:
 * - Responsive typography scaling
 * - Dark/light theme support
 * - Flexible layout that adapts to content
 * - Semantic HTML with ARIA labels
 * - Conditional rendering (returns null if no stats)
 * - Even spacing distribution
 *
 * @example
 * ```tsx
 * <Statistics
 *   stats={[
 *     { value: "10K+", label: "Happy customers" },
 *     { value: "99%", label: "Uptime" },
 *     { value: "24/7", label: "Support" }
 *   ]}
 * />
 * ```
 */
export default function Statistics({ stats }: StatisticsProps) {
  // Don't render anything if no stats are provided
  if (!stats.length) return null;

  return (
    <div
      className="flex justify-evenly py-4 w-fit gap-8"
      role="group"
      aria-label="Statistics"
    >
      {stats.map((stat, index) => (
        <div
          key={`${stat.value}-${index}`}
          className="text-center lg:text-left px-2 flex flex-col gap-2"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {stat.value}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
