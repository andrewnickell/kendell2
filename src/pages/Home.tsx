import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}

export default Home