export const styles = {
  section: `relative h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 
           dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 overflow-hidden`,

  backgroundBlob1: `absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 
                   bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl`,

  backgroundBlob2: `absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 
                   bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-3xl`,

  mainContainer: `relative flex flex-col items-center justify-center h-full w-full 
                 px-[10%] z-40 gap-8`,

  topSection: `w-full flex flex-col items-center justify-center gap-6 text-center`,

  headline: `max-w-[40%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 
            font-semibold text-slate-900 dark:text-white leading-tight`,

  description: `text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-base 
               max-w-[40%] leading-normal`,

  buttonContainer: `flex flex-col sm:flex-row gap-4 justify-center lg:justify-start`,

  secondaryButton: `flex items-center justify-center gap-2 text-violet-700 dark:text-violet-300 
                   hover:bg-violet-50 hover:text-violet-900 dark:hover:bg-violet-900 
                   dark:hover:text-violet-100 hover:gap-4 px-4 sm:px-6 py-3 bg-transparent 
                   text-sm sm:text-base transition-all duration-200 ease-in-out rounded-full cursor-pointer`,

  primaryButton: `bg-violet-600 hover:bg-violet-900 text-white px-6 sm:px-8 py-3 
                 text-sm sm:text-base rounded-full cursor-pointer transition-all duration-200 ease-in-out`,

  testimonialsContainer: `flex items-center justify-center lg:justify-start space-x-4`,

  avatarContainer: `flex -space-x-2`,

  avatar: `w-10 h-10 rounded-full border-2 border-white dark:border-slate-800`,

  starIcon: `w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400`,

  reviewText: `text-xs sm:text-sm text-slate-600 dark:text-slate-400`,

  bottomSection: `flex items-center justify-center w-full h-[25%]`,

  iconsContainer: `flex-1 relative h-full`,

  floatingIcon: `animate-pulse absolute`,

  separatorContainer: `relative w-2 h-full`,

  separatorGlow1: `absolute inset-0 bg-gradient-to-b from-transparent via-violet-400 
                  dark:via-violet-600 to-transparent blur-sm opacity-75`,

  separatorGlow2: `absolute inset-0 bg-gradient-to-b from-transparent via-violet-300 
                  dark:via-violet-600 to-transparent blur-md opacity-50`,

  separatorLine: `relative bg-gradient-to-b from-transparent via-violet-400 
                 dark:via-violet-600 to-transparent w-px h-full`,

  cardsContainer: `relative flex flex-1 h-full`,

  card1: `absolute right-1/4 top-1/3 z-2 border-[1px] border-white rounded-3xl shadow-xl`,

  card2: `absolute right-10 shadow-xl rounded-3xl border-[1px] border-black rotate-12`,

  card3: `absolute left-1/4 bottom-14 shadow-xl rounded-3xl border-[1px] border-black -rotate-12`,
};

export const backgroundPattern = {
  backgroundImage: `
    repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
    radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
    radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
  `,
  backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
};
