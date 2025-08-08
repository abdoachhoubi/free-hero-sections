# Free Hero Sections

A collection of polished, production‑ready hero sections you can copy into your projects. Each hero is built with Next.js and Tailwind CSS, with clean, composable components and sensible defaults.

- Website Builder
- E‑Learning
- SaaS

Preview them on the homepage and open the source for each hero with the GitHub button on its card.

## Quick Start (Run Locally)

Requirements: Node 18+.

1) Install dependencies
- npm i

2) Start the dev server
- npm run dev

Open http://localhost:3000

Routes:
- /website-builder
- /e-learning
- /saas

## How to Get a Hero Section

Option A — Copy from the repo
- Browse the folder for the hero you want:
  - Website Builder → https://github.com/abdoachhoubi/free-hero-sections/tree/main/src/sections/website-builder
  - E‑Learning → https://github.com/abdoachhoubi/free-hero-sections/tree/main/src/sections/e-learning
  - SaaS → https://github.com/abdoachhoubi/free-hero-sections/tree/main/src/sections/saas
- Copy the hero folder into your app and adjust import paths and assets as needed.

Option B — Import the component in a Next.js app
- Each hero exposes a main component and simple prop types.

Example (SaaS)
- File: app/saas/page.tsx
- Content:
  import Saas from '@/sections/saas'
  import { SAAS_DATA } from '@/data/hero-data'

  export default function Page() {
    return (
      <main>
        <Saas
          {...SAAS_DATA}
          onPrimaryClick={() => {}}
          onSecondaryClick={() => {}}
        />
      </main>
    )
  }

You can follow the same pattern for E‑Learning and Website Builder:
- app/e-learning/page.tsx uses ELearning from '@/sections/e-learning'
- app/website-builder/page.tsx uses WebsiteBuilder from '@/sections/website-builder'

## Project Structure

- src/app: App Router pages and layout
- src/sections/saas: SaaS hero
- src/sections/e-learning: E‑Learning hero
- src/sections/website-builder: Website Builder hero
- src/data/hero-data.ts: Example prop data
- src/data/sections.ts: Section metadata for homepage cards

## Tech Stack

- Next.js 15, React 19
- Tailwind CSS v4
- lucide-react icons

## Contributing

Issues and PRs are welcome. If you add a new hero:
- Place it under src/sections/<your-hero>
- Export a main component plus any subcomponents as needed
- Add a page route under src/app if you want a live preview
- Update src/data/sections.ts to include cover, route, and GitHub URL

## License

MIT
