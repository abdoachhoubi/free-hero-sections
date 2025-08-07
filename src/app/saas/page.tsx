"use client";
// Only using "use client" to pass event handlers `onPrimaryClick` and `onSecondaryClick` to the component

import Saas from "@/components/hero-sections/saas";
import { SAAS_DATA } from "@/data/hero-data";

export default function ELearningPage() {
  return (
    <main>
      <Saas
        {...SAAS_DATA}
        onPrimaryClick={() => console.log("Primary button clicked")}
        onSecondaryClick={() => console.log("Secondary button clicked")}
      />
    </main>
  );
}
