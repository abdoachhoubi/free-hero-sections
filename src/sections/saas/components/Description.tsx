import { IBM_Plex_Mono } from "next/font/google";
import { styles } from "../styles";
import { DescriptionProps } from "../types";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Description = ({ description }: DescriptionProps) => (
  <p className={`${ibmPlexMono.className} ${styles.description}`}>
    {description}
  </p>
);
