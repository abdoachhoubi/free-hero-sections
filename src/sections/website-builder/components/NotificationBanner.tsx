import { ArrowRight, Users } from "lucide-react";
import { styles } from "../styles";
import type { NotificationBannerProps } from "../types";

export function NotificationBanner({
  text,
  cta,
  onClick,
}: NotificationBannerProps) {
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
      <span className={styles.notification.cta}>
        {cta}
        <ArrowRight className={styles.notification.arrow} aria-hidden="true" />
      </span>
    </button>
  );
}
