import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { IoWaterOutline } from 'react-icons/io5'
import { useCart } from '../cart/CartContext'

const productDetails = ({ products }) => {
    const [resetAnimation, setResetAnimation] = useState(false)
   const [isClicked, setIsClicked] = useState(false)
   const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
    setResetAnimation(true)
  }, [])

  const { productId } = useParams()
  const {addToCart}=useCart()
  const product = products.find((coffee) => coffee.id === parseInt(productId))
  if (!product) {
    return <div>Product not found.</div>
  }
const handleToCart=()=>{
  addToCart(product)
 setIsClicked(true)
 setQuantity(quantity+1)
}
  return (
    <section className='w-full h-full'>
      <Navbar />
      <div
        className={`${
          resetAnimation ? 'scale-in-ver-top' : 'hidden'
        } flex flex-col lg:flex-row mt-8`}
      >
        <div className='w-full lg:w-1/2 h-auto relative'>
          <img
            className='w-full h-[25rem] lg:h-[36rem] object-contain object-center'
            src={product.img}
            alt={product.name}
          />
        </div>
        <div className='flex flex-col gap-y-2 lg:gap-y-8 text-white lg:w-1/2 px-5 lg:px-0 lg:pr-8 text-justify'>
          <p className='flex flex-row items-center gap-0 lg:gap-14 m-auto lg:m-0 pt-3 lg:pt-0'>
            <span className='text-xl md:text-2xl lg:text-3xl text-amber-300 font-bold'>
              {product.name}
            </span>
            <span
              onClick={handleToCart}
              className={`text-yellow-700 hover:text-yellow-600 hover:border-yellow-600 text-xl md:text-2xl border-b border-yellow-700 w-fit font-bold cursor-pointer ml-3 lg:ml-0 ${
                isClicked
                  ? 'text-yellow-500'
                  : 'text-yellow-700'
              }`}
            >
              {isClicked ? `Ordered(${quantity})` : 'Order Now'} 
            </span>
          </p>
          <p className='text-2xl text-center lg:text-start lg:text-4xl text-amber-400 font-mono font-bold'>
            €{product.price}
          </p>
          <div className='flex flex-row justify-center lg:justify-start'>
            <p className='flex flex-row items-center text-lg capitalize'>
              <span
                className={
                  product.water === 'hot water'
                    ? 'text-red-600'
                    : 'text-blue-300'
                }
              >
                {product.water}
              </span>
              <span className='pl-2'>
                {' '}
                <IoWaterOutline
                  className={
                    product.water === 'hot water'
                      ? 'text-red-600'
                      : 'text-blue-300'
                  }
                />{' '}
              </span>
            </p>
          </div>
          <p className='text-lg'>{product.description}</p>
          <p>
            <span className='text-xl md:text-2xl text-amber-200'>
              Ingredients:
            </span>{' '}
            <span className='text-lg font-sans pl-2'>
              {product.ingredients}
            </span>
          </p>

          <p>
            <span className='text-xl md:text-2xl text-amber-200'>
              Preparation:
            </span>{' '}
            <span className='text-md md:text-lg font-sans pl-2'>
              {product.prepare}
            </span>
          </p>

          <Link
            className='text-xl font-mono font-bold text-yellow-600 border-b border-yellow-600 w-fit mb-10 lg:mb-1 '
            to={'/shop'}
          >
            BACK TO SHOP
          </Link>
        </div>
      </div>
    </section>
  )
}

export default productDetails;
