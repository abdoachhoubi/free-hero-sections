"use client";

import { Funnel_Display, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const funnelDisplay = Funnel_Display({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface SaasProps {
  brandName: string;
  isAvailable: boolean;
  availabilityText: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

/**
 * Saas - Modern dark hero section with 3D abstract element
 *
 * A sophisticated hero section featuring:
 * - Dark gradient background with violet accents
 * - Availability status badge
 * - Large headline with call-to-action buttons
 * - Abstract 3D visual element
 */
export default function Saas({
  isAvailable,
  availabilityText,
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: SaasProps) {
  return (
    <section className="relative h-screen bg-gradient-to-br from-violet-50 via-violet-300 to-violet-50 dark:from-violet-950 dark:via-violet-950 dark:to-violet-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-violet-400/30 to-transparent transform rotate-12 origin-top" />
        <div className="absolute top-0 left-1/3 w-px h-2/3 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent transform -rotate-12 origin-top" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center h-full px-[10%]">
        {/* Left content */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Availability badge */}
          {isAvailable && (
            <div className="inline-flex items-center justify-center lg:justify-start space-x-2 bg-green-400/40 dark:bg-green-400/10 border border-green-400/80 dark:border-green-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse" />
              <span
                className={`${ibmPlexMono.className} text-green-600 dark:text-green-400 text-sm font-medium`}
              >
                {availabilityText}
              </span>
            </div>
          )}

          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span
              className={`bg-gradient-to-r from-violet-950 via-violet-500 to-violet-800 dark:from-violet-50 dark:via-violet-200 dark:to-violet-50 bg-clip-text text-transparent ${funnelDisplay.className}`}
            >
              {headline}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`${ibmPlexMono.className} text-violet-950 dark:text-violet-50/80 text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-lg leading-relaxed mx-auto lg:mx-0 font-light`}
          >
            {description}
          </p>

          {/* Button group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={onPrimaryClick}
              className="group relative cursor-pointer bg-violet-950 dark:bg-violet-100 text-violet-50 dark:text-violet-950 hover:bg-violet-950/90 px-8 sm:px-10 py-4 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-50/25"
            >
              <span className={`${ibmPlexMono.className} relative z-10 `}>
                {primaryButtonText}
              </span>
            </button>

            <button
              onClick={onSecondaryClick}
              className="group relative cursor-pointer border-2 border-violet-950/30 dark:border-violet-50/30 text-violet-950 dark:text-violet-50 hover:border-violet-950/50 hover:dark:border-violet-50/50 px-8 sm:px-10 py-4 text-base bg-violet-50/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 hover:bg-violet-50/10"
            >
              <span className={`${ibmPlexMono.className} relative z-10`}>
                {secondaryButtonText}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-0 dark:group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-violet-950/60 dark:text-violet-50/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-violet-950/40 dark:bg-violet-50/40 rounded-full" />
              <span className={ibmPlexMono.className}>
                Trusted by 10k+ users
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-violet-950/40 dark:bg-violet-50/40 rounded-full" />
              <span className={ibmPlexMono.className}>99.9% uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-violet-950/40 dark:bg-violet-50/40 rounded-full" />
              <span className={ibmPlexMono.className}>24/7 support</span>
            </div>
          </div>
        </div>

        {/* Right visual element */}
        <div className="h-[80%] relative flex flex-1 justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-3xl blur-3xl scale-110" />

          {/* Image container */}
          <Image
            className="animate-pulse w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
            src="/glass.png"
            alt="Glass"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute hidden dark:block bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-950 via-violet-950/50 to-transparent dark:from-violet-950 dark:via-violet-950/50" />

      {/* Float animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
