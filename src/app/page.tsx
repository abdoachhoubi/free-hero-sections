'use client'

import { ArrowUpRight, Sparkles } from 'lucide-react'
import { IBM_Plex_Mono, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const Card = ({ image, button, page }: { image: string; button: string; page: string }) => {
  const router = useRouter()
  return (
    <div
      className="flex flex-col items-center justify-center  overflow-hidden group cursor-pointer"
      onClick={() => router.push(page)}
    >
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
        These aren't just blocks of code — they're your canvas. Paste, tweak, publish.
      </p>
      <div className="flex flex-col lg:flex-row w-full items-center justify-evenly gap-4 lg:gap-8 pt-4">
        <Card image="/covers/hero-sections/cover1.png" page="/website-builder" button="Preview" />
        <Card image="/covers/hero-sections/cover2.png" page="/e-learning" button="Preview" />
        <Card image="/covers/hero-sections/cover3.png" page="/saas" button="Preview" />
      </div>
    </main>
  )
}
