import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { styles } from "../styles";
import { HeroContentProps } from "../types";
import { CTAButtons } from "./CTAButtons";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function HeroContent({
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroContentProps) {
  return (
    <div className={styles.topSection}>
      <h1 className={`${playfairDisplay.className} ${styles.headline}`}>
        {headline}
      </h1>

      <p className={`${ibmPlexMono.className} ${styles.description}`}>
        {description}
      </p>

      <CTAButtons
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
    </div>
  );
}
