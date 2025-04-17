import React from 'react'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div>
      <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
    </div>
  )
}

export default Navbar
