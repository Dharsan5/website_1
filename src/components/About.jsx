import React from 'react'

export default function About() {
  return (
    <section className="mt-stack-lg rounded-[2rem] bg-surface-container-low p-8 md:p-24 flex flex-col items-center justify-center text-center bg-noise border-t border-l border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-4xl space-y-12 relative z-10">
        <h2 className="font-headline-xl text-primary text-3xl md:text-5xl leading-tight">
          I am Marcus Chen, <span className="font-headline-accent italic text-primary-container">a self-taught director</span>. I have skills in color grading, visual effects, and narrative design.
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70">
          Over the last seven years, I've developed a precise language for storytelling that relies heavily on atmospheric tension and deliberate pacing. The work exists somewhere between documentary reality and cinematic fiction.
        </p>
      </div>
    </section>
  )
}
