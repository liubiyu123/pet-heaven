import React from 'react'
import CatCard from '../components/CatsCard'

const CatList = () => {
  return (
    <div className='dog-list'>
      <h2>Cats for Adoption</h2>
      <div className='each-list'>
        <CatCard />
      </div>
    </div>
  )
}

export default CatList