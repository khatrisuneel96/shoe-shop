import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'

function NavBar() {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <header>
        <div className="menu" onClick={() => setToggle(!toggle)}>
            <MenuIcon />
        </div>
        <div className="logo">
          <h1><Link to="/">NIKE</Link></h1>
        </div>
        
        <nav>
          <ul className={ toggle ? 'toggle': '' } onClick={()=>setToggle(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li className="close" onClick={() => setToggle(!toggle)}>
              <CloseIcon />
            </li>
          </ul>

          <div className="nav-cart">
            <span>0</span>
            <Link to="cart">
              <ShoppingCartIcon color="action" />
            </Link>
          </div>
        </nav>  
      </header>
    </div>
  )
}

export default NavBar

