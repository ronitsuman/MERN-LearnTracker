import React from 'react'
import Header from '../components/Header'
import HomepageHeader from '../components/HomepageHeader'
import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import HowItWorksSection from '../components/HowItWorksSection'
import SuccessStoriesSection from '../components/SuccessStoriesSection'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      {/* header of homepage */}
      <HomepageHeader/>
      {/* hero section  */}
      <Hero />
      {/* feature section here  */}
      <FeatureSection id="feature"/>
      {/* how it works  */}
      <HowItWorksSection id="work"/>
      {/* success stories section */}
      <SuccessStoriesSection is="testimonials"/>
      {/* footer section start here */}
      <Footer/>
      </div>
  )
}

export default Homepage