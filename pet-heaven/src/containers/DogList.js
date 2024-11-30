import React from 'react'
import DogsCard from '../components/DogsCard'

const DogList = () => {
  return (
    <div className='dog-list'>
      <h2>Dogs for Adoption</h2>
      <div className='each-list'>
        <DogsCard/>
      </div>
    </div>
  )
}

export default DogList