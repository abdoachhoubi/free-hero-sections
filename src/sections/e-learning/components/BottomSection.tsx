import { styles } from '../styles'
import { EducationalCards } from './EducationalCards'
import { FloatingIcons } from './FloatingIcons'
import { GlowingSeparator } from './GlowingSeparator'

export function BottomSection() {
  return (
    <div className={styles.bottomSection}>
      <FloatingIcons />
      <GlowingSeparator />
      <EducationalCards />
    </div>
  )
}
