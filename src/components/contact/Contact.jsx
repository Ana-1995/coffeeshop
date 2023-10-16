import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import { contact } from '../../assets'

const Contact = () => {
  const [animation, setAnimation]=useState(false) 
   useEffect(()=>{
    setAnimation(true)
  })
   const [email, setEmail] = useState('')
   const [isValidEmail, setIsValidEmail] = useState(true)

   const validateEmail = (email) => {
     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
     return emailRegex.test(email)
   }

   const handleEmailChange = (e) => {
     setEmail(e.target.value)
     setIsValidEmail(validateEmail(e.target.value))
   }
 const handleSubmit = (e) => {
   e.preventDefault()
   if (isValidEmail) {
     console.log('Email is valid:', email)
   } else {
     console.log('Invalid email:', email)
   }
 }
  return (
    <div className='w-full h-full'>
      <Navbar />
      <p className='text-center pt-9 pb-5 lg:pb-10 text-2xl mx-3 lg:mx-0 md:text-3xl tracking-wider text-yellow-800'>
        "To make me happy: Make me coffee, bring me coffee." - Stacey London
      </p>
      <div
        className={`${
          animation ? 'fade-in-fwd' : 'hidden'
        } w-full lg:w-[45rem] shadow-xl  shadow-[#4B3821] h-[30rem] m-auto bg-cover bg-left relative rounded-xl mb-10`}
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className='absolute top-28 right-20 flex flex-col'>
          <h4 className='text-4xl tracking-wider text-center font-bold text-amber-300'>HELLO!</h4>
          <form className='flex flex-col mt-6' onSubmit={handleSubmit}>
            <input
              className={`outline-yellow-800 border bg-white lg:bg-transparent text-xl text-black lg:text-white py-2 px-3 rounded-full ${
                !isValidEmail ? 'border-red-500' : ''
              }`}
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <p className='text-red-500 font-extrabold lg:font-normal text-sm pl-3 pt-1'>
                Invalid email format
              </p>
            )}
            <button
              type='submit'
              className='bg-amber-950 rounded-full py-2 px-3 text-2xl text-amber-200 mt-5 lg:mt-10 hover:bg-yellow-800 duration-300 hover:text-amber-50'
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
      contact
    </div>
  )
}

export default Contact
