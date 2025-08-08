'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { IBM_Plex_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggleButton from './ui/theme-toggle-button'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    initial: {
      x: '100%',
    },
    open: {
      x: 0,
    },
    closed: {
      x: '100%',
    },
  }
  return (
    <div className="fixed top-0 left-0 z-49 w-screen p-2">
      {/* tab */}
      <div className="w-full flex items-center justify-between p-2 rounded-full bg-[rgba(0,0,0,0.2)]">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <div className="flex items-center justify-center px-4 gap-4">
          <ThemeToggleButton variant="circle-blur" start="top-right" />
          <Menu className="mr-2" onClick={() => setIsOpen(true)} size={24} />
        </div>
      </div>
      {/* sidebar */}
      <motion.nav
        initial="initial"
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-screen h-dvh fixed top-0 left-0 z-50 bg-violet-50 dark:bg-violet-950"
      >
        <X
          className="absolute top-3 right-3 text-violet-950 dark:text-violet-50"
          onClick={() => setIsOpen(false)}
          size={24}
        />
        <ul
          onClick={() => setIsOpen(false)}
          className={`${ibmPlexMono.className} h-full flex flex-col items-center justify-center gap-6 list-none p-3 bg-[rgba(0,0,0,0.2)]`}
        >
          <li className="text-violet-950 dark:text-violet-50 hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="text-violet-950 dark:text-violet-50 hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/website-builder">Website Builder</Link>
          </li>
          <li className="text-violet-950 dark:text-violet-50 hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/saas">Saas</Link>
          </li>
          <li className="text-violet-950 dark:text-violet-50 hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/e-learning">E-Learning</Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  )
}

const Navigation = () => {
  const isMobile = useIsMobile()
  if (isMobile) {
    return <MobileNavigation />
  } else {
    return (
      <nav className="flex justify-center fixed top-0 w-full z-50 items-center p-2">
        <ul
          className={`${ibmPlexMono.className} flex gap-6 list-none p-3 bg-[rgba(0,0,0,0.2)] rounded-full items-center`}
        >
          <Link href="https://abdoachhoubi.me" target="_blank" rel="noopener noreferrer">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          </Link>
          <li className="cursor-pointer hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/website-builder">Website Builder</Link>
          </li>
          <li className="cursor-pointer hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/saas">Saas</Link>
          </li>
          <li className="cursor-pointer hover:bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-full transition:all duration-200 ease-in-out">
            <Link href="/e-learning">E-Learning</Link>
          </li>
          <div className="flex items-center justify-center px-4">
            <ThemeToggleButton variant="circle-blur" start="bottom-right" />
          </div>
        </ul>
      </nav>
    )
  }
}

export default Navigation
