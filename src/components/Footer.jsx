import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-stack-lg bg-background dark:bg-background border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-inset-padding py-stack-lg flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="font-headline-xl text-headline-xl text-primary dark:text-primary">Prisma</div>
        <div className="flex items-center gap-6">
          <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:text-primary dark:hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Instagram</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:text-primary dark:hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Vimeo</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:text-primary dark:hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:text-primary dark:hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Legal</a>
        </div>
        <div className="font-body-md text-label-sm text-on-surface-variant opacity-60">© 2024 Prisma Creative Studio. All rights reserved.</div>
      </div>
    </footer>
  )
}
