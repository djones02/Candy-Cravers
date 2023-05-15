import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{display:"flex", gap:"30px"}}>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/candy/all" >All Candy</Link>
      <Link to="/candy/easter" >Easter Candy</Link>
      <Link to="/candy/halloween" >Halloween Candy</Link>
      <Link to="/candy/new" >New Candy</Link>
      <Link to="/cart" >Cart</Link>
    </nav>
  )
}

export default Navbar