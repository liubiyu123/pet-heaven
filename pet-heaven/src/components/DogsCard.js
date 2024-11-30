import React from 'react'
import DOGIMAGE from './Dogs.js'
import { BsFillPersonFill, BsFillHouseDoorFill} from "react-icons/bs"
import { HiCake } from "react-icons/hi"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DogsCard = () => {
  return (
    <div className='dogs'>
      {
        DOGIMAGE && DOGIMAGE.map((item) => 
          <div className='dog-card' key={item.id}>
            <div className='img-box'><img src={item.image} alt="" /></div>
            <h4><BsFillPersonFill/> {item.name}</h4>
            <h4><HiCake/> {item.bday}</h4>
            <h4><BsFillHouseDoorFill/> {item.hdb}</h4>
            <Link to={`/dogdetails/${item.id}`}><Button>More</Button></Link>
          </div>
        )
      }
    </div>
  )
}

export default DogsCard