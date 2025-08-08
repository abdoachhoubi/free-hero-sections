export interface SaasProps {
  brandName: string
  isAvailable: boolean
  availabilityText: string
  headline: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

export interface AvailabilityBadgeProps {
  isAvailable: boolean
  availabilityText: string
}

export interface HeadlineProps {
  headline: string
}

export interface DescriptionProps {
  description: string
}

export interface ButtonProps {
  text: string
  onClick: () => void
  variant: 'primary' | 'secondary'
}

export interface ButtonGroupProps {
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

export interface MainContentProps {
  isAvailable: boolean
  availabilityText: string
  headline: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}
