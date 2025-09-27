import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import About from "../components/About.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Contact from "../components/Contact.jsx"
import SocialMediaWidget from "../components/SocialMediaWidget.jsx"
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <SocialMediaWidget />
      <Contact />
    </>
  )
}

export default Home
