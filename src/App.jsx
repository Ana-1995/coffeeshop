import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart, Contact, Home, ProductDetails, Reviews, Shop } from "./components"
import { data } from "./data/data"
import { CartProvider } from "./components/cart/CartContext"

const coffeeData=data

function App() {
  return (
    <CartProvider>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route
            path='/products/:productId'
            element={<ProductDetails products={coffeeData} />}
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
    </CartProvider>
  )
}

export default App
