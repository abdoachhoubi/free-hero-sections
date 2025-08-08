export type SectionMeta = {
  key: 'website-builder' | 'e-learning' | 'saas'
  label: string
  page: string
  image: string
  githubUrl: string
}

const GITHUB_BASE = 'https://github.com/abdoachhoubi/free-hero-sections/tree/main'

export const SECTIONS: SectionMeta[] = [
  {
    key: 'website-builder',
    label: 'Website Builder',
    page: '/website-builder',
    image: '/covers/hero-sections/cover1.png',
    githubUrl: `${GITHUB_BASE}/src/sections/website-builder`,
  },
  {
    key: 'e-learning',
    label: 'E-Learning',
    page: '/e-learning',
    image: '/covers/hero-sections/cover2.png',
    githubUrl: `${GITHUB_BASE}/src/sections/e-learning`,
  },
  {
    key: 'saas',
    label: 'SaaS',
    page: '/saas',
    image: '/covers/hero-sections/cover3.png',
    githubUrl: `${GITHUB_BASE}/src/sections/saas`,
  },
]
