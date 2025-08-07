export interface Stat {
  value: string;
  label: string;
}

export interface WebsiteBuilderProps {
  notificationText: string;
  notificationCta: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  onNotificationClick: () => void;
  stats: Stat[];
}

export interface NotificationBannerProps {
  text: string;
  cta: string;
  onClick: () => void;
}

export interface ActionButtonsProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export interface StatisticsProps {
  stats: Stat[];
}
