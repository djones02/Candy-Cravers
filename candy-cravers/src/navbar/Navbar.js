import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark' >
      <div className='container'>
        <Link className='navbar-brand' to="/" >Candy Cravers</Link>
      <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span className='navbar-toggler-icon'></span>
      </button>
        <div className='collapse navbar-collapse' id='navmenu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to="/about" >About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/candy/all" >All Candy</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/candy/easter" >Easter Candy</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/candy/halloween" >Halloween Candy</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/candy/new" >New Candy</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/cart" ><i class="fa-solid fa-cart-shopping"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar