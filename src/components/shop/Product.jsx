import React, { useState } from 'react';
import { useCart } from '../cart/CartContext';

const Product = ({ img, name, price, id }) => {
    const { addToCart } = useCart()
    const [isClicked, setIsClicked]=useState(false)

    const handleAddToCart = () => {
      addToCart({
        id: id,
        img,
        name,
        price,
      })
      setIsClicked(true)
    }
  return (
    <article
      className='bg-transparent min-w-[300px] h-auto p-4 flex flex-col justify-center relative rounded-lg'
      key={id}
    >
      <button onClick={handleAddToCart} className={`absolute top-2 font-sans right-2 text-yellow-900  px-2 py-1 rounded-xl font-bold duration-300 hover:bg-yellow-400 cursor-pointer ${isClicked ? 'bg-yellow-500' : 'bg-yellow-300'}`}>
       {isClicked ? 'Ordered' : 'Order'}
      </button>
      <div className='flex flex-col text-center'>
        <div className='w-full h-72 overflow-hidden rounded-lg'>
          <img src={img} alt={name} className='w-full h-full object-cover' />
        </div>
        <p className='pt-2 font-semibold text-amber-100 hover:text-amber-700 duration-300 text-2xl'>{name}</p>
        <p className='text-center text-amber-400 font-bold text-2xl font-mono'>
          €{price}
        </p>
      </div>
    </article>
  )
};

export default Product;
