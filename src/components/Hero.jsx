import React from 'react'
import logo from '../../svg/cms.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores at excepturi dignissimos modi, exercitationem officiis pariatur expedita consequatur eius tenetur odit ullam repudiandae velit sapiente porro nisi? Nihil, beatae libero.
          </p>
        </div>
        <div className="img-container">
          <img className='img' src={logo} alt="logo" />
        </div>
      </div>
    </section>
  )
}

export default Hero