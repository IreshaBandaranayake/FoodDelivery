import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Crave it, order now!</h2>
            <p>Discover a menu brimming with diverse, expertly crafted dishes, designed to delight every palate. Savor your favorite meals, prepared to perfection, and explore new flavors that promise to surprise and satisfy.</p>
            <button><a href="#explore-menu">View Our Menu</a></button>
        </div>
    </div>
  )
}

export default Header