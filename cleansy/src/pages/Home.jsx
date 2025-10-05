import React from 'react'
import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import About from "../components/About.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Contact from "../components/Contact.jsx"
import SocialMediaWidget from "../components/SocialMediaWidget.jsx"
import QuoteSection from "../components/QuoteSection";
import StepsStrip from '../components/StepsStrip.jsx'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <StepsStrip />
      <Testimonials />
      {/* <SocialMediaWidget /> */}
      <Contact />
      <QuoteSection /> 
    </>
  )
}

export default Home
