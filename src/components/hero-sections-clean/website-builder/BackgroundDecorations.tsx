"use client";

/**
 * BackgroundDecorations - Subtle gradient orbs for visual depth
 *
 * Provides decorative background elements using blurred gradient circles.
 * Creates visual depth without interfering with content readability.
 * Features:
 * - Two strategically positioned gradient orbs
 * - Responsive sizing (scales up on larger screens)
 * - Dark/light theme adaptive colors
 * - Heavily blurred for subtle effect
 * - Absolutely positioned to stay in background
 * - Marked with aria-hidden for accessibility
 *
 * @example
 * ```tsx
 * <div className="relative">
 *   <BackgroundDecorations />
 *   <div>Your main content here</div>
 * </div>
 * ```
 *
 * Note: This component should be used within a relatively positioned container
 * as it uses absolute positioning.
 */
export default function BackgroundDecorations() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Top-right gradient orb */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-200/50 dark:bg-slate-700/20 rounded-full blur-3xl" />

      {/* Bottom-left gradient orb */}
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-slate-300/30 dark:bg-slate-600/20 rounded-full blur-2xl" />
    </div>
  );
}
