import React from 'react'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] rounded-[2rem] overflow-hidden bg-noise">
      <video autoPlay className="absolute inset-0 w-full h-full object-cover opacity-60" loop muted playsInline>
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-[15vw] md:text-[20vw] leading-none tracking-tighter">
              Prisma<sup className="text-[5vw] hero-title-sup">*</sup>
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right gap-6">
            <p className="font-body-lg text-primary/70 max-w-sm">
              Prisma is a worldwide network of visual artists exploring the intersection of light, shadow, and narrative.
            </p>
            <button className="flex items-center gap-4 bg-primary-container text-on-primary-container rounded-full pl-6 pr-2 py-2 group hover:bg-primary transition-colors">
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Join the lab</span>
              <span className="bg-background text-primary rounded-full p-2 flex items-center justify-center group-hover:bg-on-primary-container group-hover:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none z-10"></div>
    </section>
  )
}
