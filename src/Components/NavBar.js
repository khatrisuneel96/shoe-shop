import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/product" >Product</Link>
    </div>
  )
}

export default NavBar
