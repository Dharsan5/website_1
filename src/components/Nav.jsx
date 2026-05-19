import React from 'react'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center mt-container-margin px-4 hidden md:flex">
      <div className="bg-surface-container-lowest/80 dark:bg-surface-container-lowest/80 backdrop-blur-xl border border-white/5 shadow-2xl rounded-full mx-auto max-w-fit px-gutter py-stack-sm flex items-center gap-8">
        <span className="font-headline-xl text-headline-xl tracking-tighter text-primary dark:text-primary mr-4">Prisma</span>
        <div className="flex items-center gap-6">
          <a className="text-primary dark:text-primary border-b border-primary font-label-sm text-label-sm uppercase tracking-widest pb-1 transition-all duration-300" href="#">Our story</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary font-label-sm text-label-sm uppercase tracking-widest transition-all duration-300" href="#">Collective</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary font-label-sm text-label-sm uppercase tracking-widest transition-all duration-300" href="#">Workshops</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary font-label-sm text-label-sm uppercase tracking-widest transition-all duration-300" href="#">Programs</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary font-label-sm text-label-sm uppercase tracking-widest transition-all duration-300" href="#">Inquiries</a>
        </div>
        <button className="bg-primary-container text-on-primary-container font-label-sm text-label-sm rounded-full px-4 py-2 ml-4 uppercase tracking-wider hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  )
}
