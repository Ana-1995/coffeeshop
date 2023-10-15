import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import { reviewsData } from '../../data/data'

const Reviews = () => {
const [animation, setAnimation]=useState(false)
const [animation2, setAnimation2] = useState(false)
 const [currentReview, setCurrentReview] = useState(0)
useEffect(()=>{
  setAnimation(true)
  setTimeout(() => {
    setAnimation2(true)
  }, 600);
})
 const handleNextReview = () => {
   if (currentReview < reviewsData.length - 1) {
     setCurrentReview(currentReview + 1)
   }
 }

 const handlePrevReview = () => {
   if (currentReview > 0) {
     setCurrentReview(currentReview - 1)
   }
 }

 const review = reviewsData[currentReview]

 return (
   <div>
     <Navbar />
     <p className='text-center pt-9 pb-0 lg:pb-6 lg:pl-4 text-2xl mx-3 lg:mx-0 md:text-3xl tracking-wider text-yellow-800'>
       "Coffee, the favorite drink of the civilized world." - Thomas Jefferson
     </p>
     <div
       className={`${
         animation ? 'swing-in-left-bck' : 'hidden'
       } bg-[#2A1300] rounded-2xl m-auto w-[90%] lg:w-[32rem] h-[30rem] lg:h-[26rem] relative mt-12 pt-6 px-4 mb-4`}
     >
       <div className='rounded-full w-32 h-32 mx-auto my-2 lg:my-4'>
         <img
           src={review.img}
           alt={review.name}
           className='rounded-full w-full h-full object-cover'
         />
       </div>
       <div className='flex flex-col justify-center items-center text-center'>
         <p className='text-3xl pb-4 text-amber-200 tracking-wider font-semibold'>
           {review.name}
         </p>
         <div className=''>
           {' '}
           <p className='text-xl text-center w-fit text-amber-400'>
             "{review.review}"
           </p>
         </div>
       </div>
     </div>
     <div
       className={`${
         animation2 ? 'swing-in-bottom-fwd' : 'hidden'
       } flex justify-center items-center mt-3 pb-5 lg:mt-6 space-x-3 text-3xl`}
     >
       <button
         className='text-white hover:text-amber-600 mb-5'
         onClick={handlePrevReview}
       >
         <BsArrowLeft />
       </button>
       <button
         className='text-white hover:text-amber-600 mb-5'
         onClick={handleNextReview}
       >
         <BsArrowRight />
       </button>
     </div>
   </div>
 )
}

export default Reviews
