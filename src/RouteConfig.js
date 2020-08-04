import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import Products from './Components/Products'
import ProductItem from './Components/ProductItem'
import NavBar from './Components/NavBar'
import PageNotFound from './Components/PageNotFound'

function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/product/:id" element={<ProductItem />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig
