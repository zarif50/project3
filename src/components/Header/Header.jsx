import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
       { <img src={assets.header_img}alt="" className="header" /> }
        <div className="header-contents">
            <h2>Order Your Favourite Food Here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest experience and cutlinery expertise.Our mission is to satisfy your cravings</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header