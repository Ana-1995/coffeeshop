import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiCoffeeLight } from 'react-icons/pi'
import { useCart } from './CartContext'
import Navbar from '../navbar/Navbar'
import './cart.css'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart()
    const [resetAnimation, setResetAnimation] = useState(false)
    useEffect(() => {
      setResetAnimation(true)
    }, [])
  const getTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price)
      if (!isNaN(price)) {
        return acc + price * item.quantity
      }
      return acc
    }, 0)

    return total
  }

  return (
    <div className=''>
      <Navbar />
<div className="bg-transparent p-4">
      {cartItems.length === 0 ? (
        <div className='mb-4 flex flex-col lg:flex-row items-center justify-center mt-48'>
          <p className='text-amber-300 text-4xl'>You have no order</p>
          <div className='flex flex-row items-center border-b border-yellow-700 text-yellow-700 hover:text-yellow-600 hover:border-yellow-600 ml-4'>
            <Link to={'/shop'} className='text-4xl'>
              Hurry up!
            </Link>
            
            <PiCoffeeLight className='text-4xl ml-2' />
          </div>
        </div>
      ) : (
        <div className={`${resetAnimation ? 'rotate-in-2-fwd-cw' : 'hidden'} lg:w-96 h-96 pl-5 mt-8 overflow-y-scroll scrollbar-container rounded-md m-auto border-2 border-yellow-700 flex flex-col justify-start items-start`}>
          <h2 className='text-3xl pl-5 font-semibold pt-4 pb-2 text-center text-yellow-700'>
            Your Order
          </h2>
          {cartItems.map((item, i) => (
            <div key={`${item.id}-${i}`} className='flex justify-center items-center p-4'>
              <div className="w-32 h-28 lg:h-32">
              <img
                src={item.img}
                alt={item.name}
                className='w-full h-full rounded-md object-cover'
              />
              </div>
              <div className='flex flex-col justify-start ml-4'>
                <p className='text-lg md:font-xl font-semibold font-sans text-amber-100'>
                  {item.name} ({item.quantity})
                </p>
                <p className='text-amber-200 pt-1 text-xl'>
                  Price:{' '}
                  <span className='font-bold font-serif text-amber-300'>
                    €{item.price}
                  </span>
                </p>
                <div className='flex gap-1'>
                  <button
                    onClick={() => {
                      removeFromCart(item.id)
                    }}
                    className='text-red-500 font-semibold text-4xl font-sans hover:text-red-700 text-start pt-2 tracking-wider'
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item) 
                    }}
                    className='text-green-500 font-medium text-4xl font-sans hover:text-green-700 text-start pt-2 tracking-wider'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className='mt-0 lg:mt-2 flex justify-center flex-row gap-3'>
            <p className='mt-0 lg:mt-2 ml-5 text-xl font-bold text-amber-200'>
              Total:{' '}
              <span className='font-sans pl-1 text-xl text-amber-300'>
                €{getTotalPrice()}
              </span>
            </p>
            <button
              onClick={clearCart}
              className='text-red-500 hover:text-red-700 font-bold tracking-wide mt-0 lg:mt-2 pl-2'
            >
              Remove All
            </button>
          </div>

          <div className='pt-2 lg:pt-6 mt-2 mb-5 text-center '>
            <Link
              to={'/'}
              className='bg-yellow-800 ml-5 font-sans text-xl uppercase text-center text-white py-1 px-3 rounded-full hover:bg-yellow-700 tracking-wide'
            >
              Order
            </Link>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cart;
