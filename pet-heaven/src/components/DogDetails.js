import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DogDetails = () => {

  return (
    <div className='dog-detail'>
      <h2>Dog Detail</h2>
      <div className="dog-section">
        <div className="img-box"><img src="https://images.dog.ceo//breeds//mix//marco.jpg" alt="" /></div>
        <div className="text-box">
          <h3>Marco</h3>
          <p>Marco is an incredibly friendly boy who may jump on you the first time he meets you since he's so excited. He still has a lot of puppy energy and can sometimes be rough when he plays. He listens to commands well and generally walks well but would need an experienced handler to manage his puppy enthusiasm. We would strongly recommend that the adopter engages a professional trainer for Marco and work consistently to keep his exuberant behaviour in check.</p>
          <Link to='/adoption'><Button>adopt</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default DogDetails