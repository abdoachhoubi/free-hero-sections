"use client";
// Only using "use client" to pass event handlers `onPrimaryClick` and `onSecondaryClick` to the component

import ELearning from "@/components/hero-sections/e-learning";
import { E_LEARNING_DATA } from "@/data/hero-data";

export default function ELearningPage() {
  return (
    <main>
      <ELearning
        {...E_LEARNING_DATA}
        onPrimaryClick={() => console.log("Primary button clicked")}
        onSecondaryClick={() => console.log("Secondary button clicked")}
      />
    </main>
  );
}
