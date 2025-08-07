import Image from "next/image";
import { styles } from "../styles";

const cards = [
  {
    src: "/images/card1.png",
    alt: "Card 1",
    width: 200,
    height: 200,
    className: styles.card1,
  },
  {
    src: "/images/card2.png",
    alt: "Card 2",
    width: 170,
    height: 170,
    className: styles.card2,
  },
  {
    src: "/images/card3.png",
    alt: "Card 3",
    width: 170,
    height: 170,
    className: styles.card3,
  },
];

export function EducationalCards() {
  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <Image
          key={index}
          src={card.src}
          alt={card.alt}
          width={card.width}
          height={card.height}
          className={card.className}
        />
      ))}
    </div>
  );
}
