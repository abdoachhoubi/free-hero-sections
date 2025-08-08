import { ArrowRight } from 'lucide-react'
import { styles } from '../styles'
import type { ActionButtonsProps } from '../types'

export function CTAButtons({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}: ActionButtonsProps) {
  return (
    <div className={styles.buttons.container}>
      <button onClick={onPrimaryClick} className={styles.buttons.primary}>
        {primaryText}
        <ArrowRight className={styles.buttons.arrow} aria-hidden="true" />
      </button>
      <button onClick={onSecondaryClick} className={styles.buttons.secondary}>
        {secondaryText}
      </button>
    </div>
  )
}
