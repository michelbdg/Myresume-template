import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Facts from './components/Facts.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Testimonial from './components/Testimonial.jsx'
import Contact from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
