import React from 'react'

function Card({ children, variant = '' }) {
  return (
    <div className={`rounded-[2rem] ${variant} p-8 flex flex-col justify-between border-t border-l border-white/5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
      {children}
    </div>
  )
}

export default function Features() {
  return (
    <section className="mt-stack-lg bg-noise relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 rounded-[2rem] overflow-hidden h-[320px] lg:h-[480px] relative border-t border-l border-white/5">
          <video autoPlay className="absolute inset-0 w-full h-full object-cover opacity-80" loop muted playsInline>
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-surface-container-high/80 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary-container mb-2 uppercase tracking-widest">Process</span>
            <h3 className="font-headline-xl text-primary text-2xl">Visual Exploration</h3>
          </div>
        </div>

        <Card>
          <div className="absolute top-0 right-0 p-6 opacity-20 font-display-lg text-4xl">01</div>
          <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center border border-white/10 overflow-hidden shrink-0">
            <img alt="icon" className="w-8 h-8 object-contain filter grayscale invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAMlxhhZ2rZNyDeMP1e1AqdPBnp5vNxeSjrxqypHRCC1MZeQK9PRhv15RNa3ZXNl5Twbi2s9vQgfs82MX3Pt5SNZbooJKXz5kZlp25G_giP0W_uiQClGy2YbLjby8w9jYl3yngyUzxJ0hDiZsZ5wo_7PGARC4AR8hkc1cPn3-YmRhhjKWBkxZG2R1rH44A6pcfGmaf1LW5OYN6SfEmO-B6AArxX-Q-zkRzWhbhiyFuExOLdJE2ZlnXx2s4JXSCrsIlxsjdLIUhgQE" />
          </div>
          <div>
            <h3 className="font-headline-xl text-primary text-xl mb-2">Project Storyboard.</h3>
            <p className="font-body-md text-on-surface-variant text-sm">Sequence narrative beats with precision.</p>
          </div>
        </Card>

        <div className="grid grid-rows-2 gap-4 h-[640px] lg:h-[480px]">
          <Card>
            <div className="absolute top-0 right-0 p-6 opacity-20 font-display-lg text-3xl">02</div>
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-white/10 overflow-hidden shrink-0">
              <img alt="critique icon" className="w-6 h-6 object-contain filter grayscale invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC72bc9L6I4ArW7sHN0xqVjMh79ykVn8L-m18hj0HtqtSM5erLGcrJLDETL8e8W3pf3D5uWdrZvP_dM7Q9kwNx4rMaqw6bMO2k370NKHFFAcPJ6LSpRq0GuaqiZQTv8-cUAyZRiiq1fQ_j7uWlVWHUaKISxjLZIud-QNsNIQikdrXOC15Loex0McrTCQTjbwvYW-uB1ZUHWeZFeZVdQ6PAUhjdFCdIzWayn9duGK2yFRYHeoiXyL4oQHzpKEzvEszpizvvxEpx1gug" />
            </div>
            <div>
              <h3 className="font-headline-xl text-primary text-lg mb-1">Smart Critiques.</h3>
              <p className="font-body-md text-on-surface-variant text-xs">AI-assisted tonal analysis.</p>
            </div>
          </Card>

          <Card variant="bg-surface-container-high h-full">
            <div className="absolute top-0 right-0 p-6 opacity-20 font-display-lg text-3xl">03</div>
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-white/10 overflow-hidden shrink-0">
              <img alt="portal icon" className="w-6 h-6 object-contain filter grayscale invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzR-eT6Qu6AKPkuK498suB6T_EbZEcrEO2HnTZP7_rkTyx-ScUfJjP0h97LuJ1wQ7JLZHTzi7J8gln8TTutzRh54j5ji7eGEufH5HmGuZoY6c44cQBVD4EM49ymIE5aRvr3F7JTg5LCB5LcGeTDlztvFEflj6Hr8oIvsEOOrZO1nLgwY9rG8igEYRQFncSIlMtkOQzPrJWBQuIY6O7yNklraNreJSQD8gSawNvtvBOVsAZpGTyMAIpDzLKtm86TfTuKmZ0JRM3OEA" />
            </div>
            <div>
              <h3 className="font-headline-xl text-primary text-lg mb-1">Immersion Capsule.</h3>
              <p className="font-body-md text-on-surface-variant text-xs">Deep-dive project review environments.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
