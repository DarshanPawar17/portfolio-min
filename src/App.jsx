import React from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-transparent text-textLight min-h-screen relative">
      <Background />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
