import React from 'react'

import HeroBooks from "../components/Homepage/HeroBooks"
import HeroBody from "../components/Homepage/HeroBody"
import Features from "../components/Homepage/Features"
import Benefits from "../components/Homepage/Benefits"
import CallToAction from "../components/Homepage/CallToAction"
import Reviews from "../components/Homepage/Reviews"
import CallToBuy from "../components/Homepage/CallToBuy"

const Homepage = () => {
  return (
    <>
      <HeroBooks/>
      <HeroBody/>
      <Features/>
      <Benefits/>
      <CallToAction/>
      <Reviews/>
      <CallToBuy/>
    </>
  )
}

export default Homepage
