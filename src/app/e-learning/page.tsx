'use client'
// Only using "use client" to pass event handlers `onPrimaryClick` and `onSecondaryClick` to the component

import { E_LEARNING_DATA } from '@/data/hero-data'
import { ELearning } from '@/sections/e-learning'

export default function ELearningPage() {
  return (
    <main>
      <ELearning
        {...E_LEARNING_DATA}
        onPrimaryClick={() => console.log('Primary button clicked')}
        onSecondaryClick={() => console.log('Secondary button clicked')}
      />
    </main>
  )
}
