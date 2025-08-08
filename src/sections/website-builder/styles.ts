export const styles = {
  section:
    'relative lg:h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden',

  backgroundDecorations: {
    container: 'absolute inset-0',
    circle1:
      'absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-200/50 dark:bg-slate-700/20 rounded-full blur-3xl',
    circle2:
      'absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-slate-300/30 dark:bg-slate-600/20 rounded-full blur-2xl',
  },

  notification: {
    button:
      'cursor-pointer flex flex-col lg:flex-row items-center justify-center lg:justify-start w-fit gap-4 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white p-1 lg:pr-6 rounded-2xl lg:rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 group text-sm sm:text-base',
    badge:
      'flex items-center gap-2 py-2 px-3 rounded-xl lgƒ†ø†ƒ:rounded-full bg-slate-200 dark:bg-slate-700',
    icon: 'w-4 h-4 xl:w-5 lg:h-5',
    text: 'font-medium text-xs 2xl:text-sm',
    cta: 'font-medium text-xs flex items-center gap-2 pb-2 lg:pb-0 2xl:text-sm text-slate-700 dark:text-white dark:group-hover:text-white group-hover:text-slate-900',
    arrow: 'w-4 h-4 xl:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-200',
  },

  buttons: {
    container: 'flex justify-center lg:justify-start gap-4',
    primary:
      'flex items-center justify-center gap-4 rounded-full cursor-pointer bg-slate-300 dark:bg-white text-slate-900 dark:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-100 px-6 py-3 lg:py-2 xl:py-3 text-base lg:text-sm xl:text-base group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200',
    secondary:
      'flex items-center justify-center gap-4 rounded-full cursor-pointer border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 sm:px-8 py-3 lg:py-2 xl:py-3 text-base lg:text-sm xl:text-base bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200',
    arrow:
      'w-4 h-4 lg:w-3 lg:h-3 xl:w-5 xl:h-5 group-hover:translate-x-1 transition-transform duration-200',
  },

  statistics: {
    container: 'flex justify-evenly py-4 w-fit gap-4 xl:gap-8',
    item: 'text-center lg:text-left px-2 flex flex-col gap-2',
    value: 'text-xl lg:text-2xl xl:text-4xl font-bold text-slate-900 dark:text-white',
    label: 'text-slate-600 dark:text-slate-400 text-xs sm:text-sm xl:text-base',
  },

  content: {
    container:
      'z-10 flex flex-col w-full items-center justify-center lg:items-start px-4 pt-[14dvh] lg:pt-0 lg:px-[10%]',
    header:
      'text-center lg:text-left h-full w-full lg:w-[50%] xl:w-[60%] flex flex-col items-center justify-center lg:items-start gap-8 lg:gap-4 xl:gap-6 2xl:gap-8',
    headline:
      'text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight',
    description:
      'text-slate-600 dark:text-slate-300 text-sm xl:text-lg 2xl:text-xl max-w-2xl lg:max-w-lg leading-relaxed',
  },

  image: {
    figure: 'lg:absolute lg:bottom-0 lg:right-[2%]',
    img: 'w-full h-auto lg:h-[90vh] xl:h-[85vh] 2xl:h-[90vh] lg:w-auto',
  },
}
