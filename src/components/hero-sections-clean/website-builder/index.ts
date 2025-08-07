/**
 * WebsiteBuilder Component Library
 *
 * A collection of modern, accessible React components for building
 * engaging hero sections and landing pages.
 */

// Main component
export { default as WebsiteBuilder } from "./WebsiteBuilder";
export type { WebsiteBuilderProps } from "./WebsiteBuilder";

// Sub-components
export { default as NotificationBanner } from "./NotificationBanner";
export type { NotificationBannerProps } from "./NotificationBanner";

export { default as ActionButtons } from "./ActionButtons";
export type { ActionButtonsProps } from "./ActionButtons";

export { default as Statistics } from "./Statistics";
export type { StatisticsProps } from "./Statistics";

export { default as BackgroundDecorations } from "./BackgroundDecorations";

// Shared types
export type {
  ButtonClickHandler,
  InteractiveComponentProps,
  Stat,
  ThemeAwareProps,
} from "./types";
