'use client'

import type React from 'react'
import { ArrowUpRight, Sparkles, Github } from 'lucide-react'
import { IBM_Plex_Mono, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SECTIONS } from '@/data/sections'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const Card = ({
  image,
  button,
  page,
  githubUrl,
  label,
}: {
  image: string
  button: string
  page: string
  githubUrl: string
  label: string
}) => {
  const router = useRouter()
  return (
    <div
      className="relative flex flex-col items-center justify-center  overflow-hidden group cursor-pointer"
      onClick={() => router.push(page)}
    >
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View code on GitHub: ${label}`}
        title={`View ${label} on GitHub`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white/80 backdrop-blur px-2.5 py-2 text-indigo-700 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md dark:bg-slate-900/70 dark:text-indigo-200 dark:border-slate-700"
      >
        <Github className="w-4 h-4" />
      </a>
      <Image
        className="rounded-xl lg:rounded-3xl transition-all duration-500 ease-in-out border-[1px] border-indigo-50 overflow-hidden"
        src={image}
        alt=""
        width={500}
        height={500}
      />
      <Link
        href={page}
        className={`${ibmPlexMono.className} w-full py-4 hidden lg:flex text-center text-xl items-center justify-center gap-2 text-indigo-600 dark:text-indigo-200 transform translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:gap-4`}
      >
        {button}
        <ArrowUpRight className="text-2xl" />
      </Link>
    </div>
  )
}
export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `
		  linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
		  linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
		  radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
		`,
        backgroundSize: '32px 32px, 32px 32px, 100% 100%',
      }}
      className="flex flex-col min-h-screen items-center justify-center px-[10vw] pt-[10vh] lg:pt-[14vh] xl:pt-[10vh] pb-4 gap-4 lg:gap-8"
    >
      <span className="flex gap-2 items-center justify-center px-2 lg:px-4 py-2 bg-indigo-50/0 dark:bg-indigo-900 rounded-full border border-indigo-500 dark:border-indigo-900 text-indigo-600 dark:text-indigo-200">
        <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
        <p className={`${ibmPlexMono.className} text-xs lg:text-sm`}>Design less. Build more</p>
      </span>
      <h1
        className={`${playfairDisplay.className} max-w-5xl text-center text-4xl lg:text-5xl xl:text-8xl font-bold text-indigo-900 dark:text-indigo-200 leading-tight`}
      >
        Hero sections that speak for themselves
      </h1>
      <p
        className={`${ibmPlexMono.className} text-xs lg:text-sm leading-relaxed lg:leading-normal text-center text-indigo-500 dark:text-indigo-50`}
      >
        Crafted for makers who care about detail but hate starting from scratch.
        <br />
        These aren&apos;t just blocks of code — they&apos;re your canvas. Paste, tweak, publish.
      </p>
      <div className="flex flex-col lg:flex-row w-full items-center justify-evenly gap-4 lg:gap-8 pt-4">
        {SECTIONS.map((s) => (
          <Card
            key={s.key}
            image={s.image}
            page={s.page}
            button="Preview"
            githubUrl={s.githubUrl}
            label={s.label}
          />
        ))}
      </div>
    </main>
  )
}
