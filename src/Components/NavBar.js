import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    // <div className="navbar">
    //   <Link to="/">Home</Link>
    //   <Link to="/product" >Product</Link>
    // </div>

    <div>
      <header>
        <div className="menu"></div>
        <div className="logo">
          <h1><Link to="/">NIKE</Link></h1>
        </div>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>

          <div className="nav-cart">
            <span>0</span>
            <ShoppingCartIcon />
          </div>
        </nav>
          
        
      </header>
    </div>
  )
}

export default NavBar

