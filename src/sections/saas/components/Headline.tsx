import { Funnel_Display } from "next/font/google";
import { styles } from "../styles";
import { HeadlineProps } from "../types";

const funnelDisplay = Funnel_Display({ subsets: ["latin"] });

export const Headline = ({ headline }: HeadlineProps) => (
  <h1 className={styles.headline}>
    <span className={`${styles.headlineGradient} ${funnelDisplay.className}`}>
      {headline}
    </span>
  </h1>
);
