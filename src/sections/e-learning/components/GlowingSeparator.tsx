import { styles } from "../styles";

export function GlowingSeparator() {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.separatorGlow1} />
      <div className={styles.separatorGlow2} />
      <div className={styles.separatorLine} />
    </div>
  );
}
