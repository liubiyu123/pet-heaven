import React from 'react'
import img from '../img/about_home.jpg'

const About = () => {
  return (
    <div className='about-section'>
      <h2>About Us</h2>
      <div className='main'>
        <div className="img-box"><img src={img} alt="" /></div>
        <div className="text">
          <h3>What We Do</h3>
          <p>While there has recently been slight progress in the area of animal welfare in Singapore, the culling of our strays dogs is continuing at an alarming pace, mainly due to rapid urbanization. A group of volunteering stray lovers, feeders and rescuers from various walks of life have come together with the purpose of pursuing change for these innocent animals.</p>
        </div>
      </div>
    </div>
  )
}

export default About