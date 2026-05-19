import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark">
      <Nav />
      <main className="p-container-margin md:p-inset-padding min-h-screen">
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
