import React, { useEffect, useState } from 'react'
import './home.css'
import Navbar from '../navbar/Navbar'
import { homebg2 } from '../../assets'
import { Link } from 'react-router-dom'


const Home = () => {
    const [resetAnimation, setResetAnimation] = useState(false)
    const [resetAnimation2, setResetAnimation2] = useState(false)
     const [resetAnimation3, setResetAnimation3] = useState(false)
  useEffect(() => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation2(true)
    }, 500) 
    setTimeout(() => {
      setResetAnimation3(true)
    }, 1300) 
  }, [])
  return (
    <div
      className={`${
        resetAnimation ? '' : 'hidden'
      } w-full h-screen relative`}
    >
      <div
        className={`${resetAnimation ? 'fade-in-animation' : 'hidden'} w-full h-full bg-cover lg:bg-contain bg-right lg:bg-center relative`}
        style={{ backgroundImage: `url(${homebg2})` }}
      >
        <Navbar />
        <div className='flex flex-col my-60 lg:my-72 items-center gap-y-6 text-center'>
          <h1
            className={`${
              resetAnimation2 ? 'scale-in-center' : 'hidden'
            } text-3xl md:text-5xl lg:text-6xl text-yellow-100 capitalize font-semibold tracking-wider`}
          >
            Life begins after coffee
          </h1>
          <button
            className={`${
              resetAnimation3 ? 'scale-in-center' : 'hidden'
            } bg-amber-400 hover:bg-amber-500 font-bold duration-300 text-black py-2 px-4 rounded-full text-2xl md:text-4xl lg:text-3xl tracking-wider`}
          >
            <Link to={'/shop'}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
