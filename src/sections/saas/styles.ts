export const styles = {
  section:
    "relative lg:h-screen bg-gradient-to-br from-violet-50 via-violet-300 to-violet-50 dark:from-violet-950 dark:via-violet-950 dark:to-violet-950 overflow-hidden",
  backgroundContainer: "absolute inset-0",
  gridPattern:
    "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30",
  diagonalLine1:
    "absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-violet-400/30 to-transparent transform rotate-12 origin-top",
  diagonalLine2:
    "absolute top-0 left-1/3 w-px h-2/3 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent transform -rotate-12 origin-top",
  mainContainer: "relative z-10 flex flex-col lg:flex-row items-center h-full px-4 pt-[14dvh] lg:px-[10%] lg:pt-0",
  contentContainer: "flex-1 space-y-6 sm:space-y-8 text-center lg:text-left",
  availabilityBadge:
    "inline-flex items-center justify-center lg:justify-start space-x-2 bg-green-400/40 dark:bg-green-400/10 border border-green-400/80 dark:border-green-400/20 rounded-full px-4 py-2 backdrop-blur-sm",
  availabilityDot:
    "w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse",
  availabilityText: "text-green-600 dark:text-green-400 text-sm font-medium",
  headline:
    "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-relaxed lg:leading-tight",
  headlineGradient:
    "bg-gradient-to-r from-violet-950 via-violet-500 to-violet-800 dark:from-violet-50 dark:via-violet-200 dark:to-violet-50 bg-clip-text text-transparent",
  description:
    "text-violet-950 dark:text-violet-50/80 text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-lg leading-relaxed mx-auto lg:mx-0 font-light",
  buttonGroup:
    "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4",
  primaryButton:
    "group relative cursor-pointer bg-violet-950 dark:bg-violet-100 text-violet-50 dark:text-violet-950 hover:bg-violet-950/90 px-8 sm:px-10 py-4 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-50/25",
  secondaryButton:
    "group relative cursor-pointer border-2 border-violet-950/30 dark:border-violet-50/30 text-violet-950 dark:text-violet-50 hover:border-violet-950/50 hover:dark:border-violet-50/50 px-8 sm:px-10 py-4 text-base bg-violet-50/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 hover:bg-violet-50/10",
  secondaryButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-0 dark:group-hover:opacity-100 rounded-xl transition-opacity duration-300",
  buttonText: "relative z-10",
  trustIndicators:
    "flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-violet-950/60 dark:text-violet-50/60 text-sm",
  trustItem: "flex items-center space-x-2",
  trustDot: "w-1 h-1 bg-violet-950/40 dark:bg-violet-50/40 rounded-full",
  visualContainer:
    "h-[80%] relative flex flex-1 justify-center lg:justify-end mt-8 lg:mt-0",
  glowEffect:
    "absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-3xl blur-3xl scale-110",
  image:
    "animate-pulse w-[60vw] h-[40dvh] lg:h-auto max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl",
  bottomGradient:
    "absolute hidden dark:block bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-950 via-violet-950/50 to-transparent dark:from-violet-950 dark:via-violet-950/50",
};
