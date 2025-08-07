"use client";

import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface WebsiteBuilderProps {
  notificationText: string;
  notificationCta: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  onNotificationClick: () => void;
  stats: Stat[];
}

// Notification Banner Component
function NotificationBanner({ 
  text, 
  cta, 
  onClick 
}: { 
  text: string; 
  cta: string; 
  onClick: () => void; 
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center w-fit gap-4 bg-slate-700 dark:bg-slate-600 text-white p-1 pr-6 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200 group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      aria-label={`${text} - ${cta}`}
    >
      <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-slate-800 dark:bg-slate-700">
        <Users className="w-5 h-5 sm:w-4 sm:h-4" aria-hidden="true" />
        <span className="font-medium text-sm">{text}</span>
      </div>
      <span className="font-medium text-slate-300 group-hover:text-white">
        {cta}
      </span>
      <ArrowRight className="w-5 h-5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
    </button>
  );
}

// Action Buttons Component
function ActionButtons({ 
  primaryText, 
  secondaryText, 
  onPrimaryClick, 
  onSecondaryClick 
}: {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}) {
  return (
    <div className="flex justify-center lg:justify-start gap-4">
      <button
        onClick={onPrimaryClick}
        className="flex items-center justify-center gap-4 rounded-full cursor-pointer bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-6 sm:px-8 py-3 text-base sm:text-lg group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200"
      >
        {primaryText}
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
      </button>
      <button
        onClick={onSecondaryClick}
        className="flex items-center justify-center gap-4 rounded-full cursor-pointer border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200"
      >
        {secondaryText}
      </button>
    </div>
  );
}

// Statistics Component
function Statistics({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null;
  
  return (
    <div className="flex justify-evenly py-4 w-fit gap-8" role="group" aria-label="Statistics">
      {stats.map((stat, index) => (
        <div
          key={`${stat.value}-${index}`}
          className="text-center lg:text-left px-2 flex flex-col gap-2"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {stat.value}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Background Decorations Component
function BackgroundDecorations() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-200/50 dark:bg-slate-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-slate-300/30 dark:bg-slate-600/20 rounded-full blur-2xl" />
    </div>
  );
}

/**
 * WebsiteBuilder - Modern tech hero section with 3D robot
 *
 * A sleek hero section featuring:
 * - Light background with subtle gradients
 * - Notification banner with social proof
 * - Large 3D robot illustration
 * - Statistics showcase
 */
export default function WebsiteBuilder({
  notificationText,
  notificationCta,
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  onNotificationClick,
  stats,
}: WebsiteBuilderProps) {
  return (
    <section className="relative lg:h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <BackgroundDecorations />

      {/* Main content container */}
      <div className="z-10 flex flex-col w-full px-[10%]">
        <header className="text-center lg:text-left h-full lg:w-[60%] flex flex-col gap-8">
          <NotificationBanner 
            text={notificationText}
            cta={notificationCta}
            onClick={onNotificationClick}
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            {headline}
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-lg leading-relaxed">
            {description}
          </p>

          <ActionButtons 
            primaryText={primaryButtonText}
            secondaryText={secondaryButtonText}
            onPrimaryClick={onPrimaryClick}
            onSecondaryClick={onSecondaryClick}
          />

          <Statistics stats={stats} />
        </header>
      </div>

      {/* Hero image */}
      <figure className="lg:absolute lg:bottom-0 lg:right-[2%]">
        <Image
          className="w-full h-auto lg:h-[90vh] lg:w-auto"
          src="/robot.png"
          alt="3D robot illustration representing modern technology"
          width={400}
          height={400}
          priority
        />
      </figure>
    </section>
  );
}