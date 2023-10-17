import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { logo } from '../../assets'
import { useCart } from '../cart/CartContext'

const Navbar = () => {
  const activeNav = 'text-yellow-600'
  const notActiveNav = ''
  const { cartItems } = useCart()
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = windowWidth <= 768 
  return (
    <div className='flex items-center justify-between text-yellow-700 bg-transparent z-50 mx-3 pt-7 lg:pt-4'>
      <div className='flex items-center'>
        <Link to={'/'}>
          <img
            src={logo}
            className='w-10 md:w-20 h-10 md:h-16 object-cover'
            alt=''
          />
        </Link>
      </div>
      <ul className='flex flex-row justify-center items-center text-md md:text-3xl gap-3 md:gap-4 tracking-wider font-extrabold'>
        <li className='underline-hover'>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? activeNav : notActiveNav)}
          >
            Home
          </NavLink>
        </li>
        <li className='underline-hover'>
          <NavLink
            to={'/shop'}
            className={({ isActive }) => (isActive ? activeNav : notActiveNav)}
          >
            Shop
          </NavLink>
        </li>
        <li className='underline-hover'>
          <NavLink
            to={'/reviews'}
            className={({ isActive }) => (isActive ? activeNav : notActiveNav)}
          >
            Reviews
          </NavLink>
        </li>
        <li className='underline-hover'>
          <NavLink
            to={'/contact'}
            className={({ isActive }) => (isActive ? activeNav : notActiveNav)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center relative'>
        <NavLink
          to={'/cart'}
          className={({ isActive }) => (isActive ? activeNav : notActiveNav)}
        >
          <FiShoppingCart size={isMobile ? 22 : 28} />
          {totalQuantity > 0 && (
            <span className='absolute bottom-5 left-2 lg:left-4 bg-yellow-700 text-white px-2 py-1 rounded-full text-xs font-sans'>
              {totalQuantity}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
