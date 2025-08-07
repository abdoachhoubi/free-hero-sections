"use client";
// Only using "use client" to pass event handlers `onPrimaryClick`, `onSecondaryClick` and `onNotificationClick` to the component

import { WebsiteBuilder } from "@/components/hero-sections-clean/website-builder";
import { WEBSITE_BUILDER_DATA } from "@/data/hero-data";

export default function WebsiteBuilderPage() {
  return (
    <main>
      <WebsiteBuilder
        {...WEBSITE_BUILDER_DATA}
        onPrimaryClick={() => console.log("Primary button clicked")}
        onSecondaryClick={() => console.log("Secondary button clicked")}
        onNotificationClick={() => console.log("Notification clicked")}
      />
    </main>
  );
}
