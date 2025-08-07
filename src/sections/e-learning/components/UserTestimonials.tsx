import { Star } from "lucide-react";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { styles } from "../styles";
import { UserTestimonialsProps } from "../types";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function UserTestimonials({
  rating,
  reviewCount,
  userAvatars,
}: UserTestimonialsProps) {
  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.avatarContainer}>
        {userAvatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar}
            alt={`User ${index + 1}`}
            className={styles.avatar}
            width={32}
            height={32}
          />
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} className={styles.starIcon} />
          ))}
        </div>
        <span className={`${ibmPlexMono.className} ${styles.reviewText}`}>
          loved by {reviewCount}+ students
        </span>
      </div>
    </div>
  );
}
