export interface ELearningProps {
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  rating: number;
  reviewCount: number;
  userAvatars: string[];
}

export interface HeroContentProps {
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export interface CTAButtonsProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export interface UserTestimonialsProps {
  rating: number;
  reviewCount: number;
  userAvatars: string[];
}
