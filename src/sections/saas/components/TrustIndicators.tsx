import { IBM_Plex_Mono } from "next/font/google";
import { styles } from "../styles";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const TrustIndicators = () => {
  const indicators = ["Trusted by 10k+ users", "99.9% uptime", "24/7 support"];

  return (
    <div className={styles.trustIndicators}>
      {indicators.map((text, index) => (
        <div key={index} className={styles.trustItem}>
          <div className={styles.trustDot} />
          <span className={ibmPlexMono.className}>{text}</span>
        </div>
      ))}
    </div>
  );
};
