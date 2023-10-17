import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import {PiCoffeeLight} from 'react-icons/pi'
import { data } from '../../data/data'
import Product from './Product'
import { Link } from 'react-router-dom'
import './shop.css'

const Shop = () => {
   const [search, setSearch] = useState('')
   const [selectedFilter, setselectedFilter] = useState({ category: null })
   const [sortOrder, setSortOrder] = useState('') // Updated sortOrder initial state
   const [resetAnimation, setResetAnimation] = useState(false)
   useEffect(() => {
     setResetAnimation(true)
   }, [])

   const handleFilterChange = (filterName, value) => {
     setselectedFilter({ ...selectedFilter, [filterName]: value })
   }

   const handleAllCoffeeFilter = () => {
     setselectedFilter({ category: null })
   }

   const handleSortOrderChange = (order) => {
     setSortOrder(order)
   }

   const filterAndSortCoffee = () => {
     let filteredAndSortedCoffee = data

     // Filter based on selected category
     if (selectedFilter.category) {
       filteredAndSortedCoffee = filteredAndSortedCoffee.filter(
         (coffee) => coffee.category === selectedFilter.category
       )
     }

     // Filter based on search query
     if (search) {
       filteredAndSortedCoffee = filteredAndSortedCoffee.filter((coffee) =>
         coffee.name.toLowerCase().includes(search.toLowerCase())
       )
     }

     // Sort the filtered data
     if (sortOrder === 'asc') {
       filteredAndSortedCoffee.sort((a, b) => a.price - b.price)
     } else if (sortOrder === 'desc') {
       filteredAndSortedCoffee.sort((a, b) => b.price - a.price)
     }

     return filteredAndSortedCoffee
   }

  return (
    <div className='w-full h-full mb-5'>
      <Navbar />
      <div>
        <p className='text-center pt-9 pb-6 text-2xl mx-3 lg:mx-0 md:text-3xl tracking-wider text-yellow-800'>
          "Coffee smells like freshly ground heaven." - Jessi Lane Adams
        </p>
        <div className={`${resetAnimation ? 'scale-in-center' : 'hidden'}`}>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-x-4 pt-0 lg:pt-14 mb-2 lg:mb-20'>
            <div className='flex flex-row gap-x-3'>
              <button
                onClick={handleAllCoffeeFilter}
                className={`${
                  selectedFilter.category === null
                    ? 'font-extrabold text-amber-300'
                    : 'font-normal text-amber-200'
                } bg-transparent text-xl lg:text-2xl tracking-wide `}
              >
                All
              </button>
              {['hot', 'cold', 'cocktail'].map((category) => (
                <button
                  key={category}
                  className={`${
                    selectedFilter.category === category
                      ? 'text-amber-400 font-extrabold'
                      : 'text-amber-200 font-normal'
                  } bg-transparent text-2xl tracking-wide capitalize`}
                  onClick={() => handleFilterChange('category', category)}
                >
                  {category}
                </button>
              ))}
              <PiCoffeeLight size={30} className='text-[#8B735B]' />
            </div>
            <div className='flex flex-row justify-center mt-5 lg:mt-0 items-center py-1 px-3 text-md rounded-full  text-amber-500 border border-amber-500 lg:hidden '>
              <input
                placeholder='Search coffee...'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-transparent outline-none border-none placeholder-amber-500 text-lg '
              />
              <BsFillSearchHeartFill className='text-amber-500' />
            </div>
            <div className='pl-0 lg:pl-2 pt-5 lg:pt-0'>
              <label
                htmlFor='sortOrder'
                className='text-amber-400 text-md md:text-xl tracking-wide font-bold pr-2'
              >
                Sort by Price:
              </label>
              <select
                id='sortOrder'
                value={sortOrder}
                onChange={(e) => handleSortOrderChange(e.target.value)}
                className='text-amber-400 text-md md:text-xl tracking-wide outline-none bg-yellow-800 rounded-full py-1 px-2 cursor-pointer'
              >
                <option className='text-xs md:text-lg'>
                  select
                </option>
                <option className='text-xs md:text-lg' value='asc'>
                  Low to High
                </option>
                <option className='text-xs md:text-lg' value='desc'>
                  High to Low
                </option>
              </select>
            </div>
            <PiCoffeeLight
              className='text-[#8B735B] hidden lg:block'
              size={30}
            />
            <div className='hidden lg:flex flex-row justify-center items-center py-1 px-3 text-md rounded-full text-amber-500 border border-amber-500 '>
              <input
                placeholder='Search coffee...'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-transparent outline-none border-none placeholder-amber-500 text-lg '
              />
              <BsFillSearchHeartFill className='text-amber-500' />
            </div>
          </div>

          <div className='flex flex-col w-full h-full md:flex-row flex-wrap justify-center items-center gap-y-2 lg:gap-y-5 gap-x-5 mt-5'>
            {filterAndSortCoffee().map((coffee) => (
              <Product
                key={coffee.id}
                id={coffee.id}
                img={coffee.img}
                name={<Link to={`/products/${coffee.id}`}>{coffee.name}</Link>}
                price={coffee.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
