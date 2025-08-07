import { styles } from "../styles";
import type { WebsiteBuilderProps } from "../types";
import { CTAButtons } from "./CTAButtons";
import { NotificationBanner } from "./NotificationBanner";
import { Statistics } from "./Statistics";

interface HeroContentProps {
  notificationText: string;
  notificationCta: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  onNotificationClick: () => void;
  stats: WebsiteBuilderProps["stats"];
}

export function HeroContent({
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
}: HeroContentProps) {
  return (
    <div className={styles.content.container}>
      <header className={styles.content.header}>
        <NotificationBanner
          text={notificationText}
          cta={notificationCta}
          onClick={onNotificationClick}
        />

        <h1 className={styles.content.headline}>{headline}</h1>

        <p className={styles.content.description}>{description}</p>

        <CTAButtons
          primaryText={primaryButtonText}
          secondaryText={secondaryButtonText}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
        />

        <Statistics stats={stats} />
      </header>
    </div>
  );
}
