"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "./ui/theme-toggle-button";

const Navigation = () => {
  return (
    <nav className="flex justify-center fixed top-0 w-full z-50 items-center p-2">
      <ul className="flex gap-6 list-none p-3 bg-[rgba(0,0,0,0.2)] rounded-full items-center">
        <Link
          href="https://abdoachhoubi.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
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
  );
};

export default Navigation;
