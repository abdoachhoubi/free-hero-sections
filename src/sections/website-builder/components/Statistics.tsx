import { styles } from "../styles";
import type { StatisticsProps } from "../types";

export function Statistics({ stats }: StatisticsProps) {
  if (!stats.length) return null;

  return (
    <div
      className={styles.statistics.container}
      role="group"
      aria-label="Statistics"
    >
      {stats.map((stat, index) => (
        <div key={`${stat.value}-${index}`} className={styles.statistics.item}>
          <div className={styles.statistics.value}>{stat.value}</div>
          <div className={styles.statistics.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
