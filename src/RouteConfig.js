import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Products from './Components/Products'
import ProductItem from './Components/ProductItem'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import NavBar from './Components/NavBar'
import PageNotFound from './Components/PageNotFound'

function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/aboutus" element={<About /> } />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductItem />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig
