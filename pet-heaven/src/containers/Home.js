import React from 'react'
import about from '../img/about_home.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <div className="title">
          <h2>Welcome to Pet Heaven</h2>
          <p>Are you looking for a pet to adopt? < br/>
          here got all the cats and dogs you looking for!</p>
        </div>
      </div>
      <div className='adoptions_container'>
        <h1>Adoption</h1>

        <div className="adoptions">

          <div className='box dog'>
            <Link to="/dog">
              <h2>Adopt Dogs</h2>
              <p>List of Dogs for adoptions</p>
            </Link>
          </div>

          <div className='box cat'>
            <Link to="/cat">
              <h2>Adopt Cats</h2>
              <p>List of Cats for adoptions</p>
            </Link>
          </div>

        </div>
      </div>
      <div className="header">About</div>
      <div className="about_container">
        <div className="main">
          <img src={about} alt="" />
        </div>
        <div className="about-text">
            <h3>Pet Haven</h3>
            <p>What Pet Owners Need to Know About Pet Anxiety Like their owners, pets can also feel anxious and nervous. Anxiety can come in at any time and each pet react to it differently. While the feeling does go away, there...</p>
            <Link to="/about"><Button>More</Button></Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home