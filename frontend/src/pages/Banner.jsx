import React from 'react'
import banner from'../assets/banner.png'
import FreeBook from '../Components/FreeBook'
const Banner = () => {
  return (
   <>
   <div className='max-w-screen-2xl container max-auto md:px-20 px-4 my-5 flex flex-col md:flex-row'>
<div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
<div className="space-y-12">


<h1 className='text-4xl font-bold text-white'>Hello, Welcome here to learn something <span className='text-pink-500'> new everyday!!! </span> </h1>
<p> <span className='text-3xl '>W</span>elcome to our bookstore, where you'll discover a diverse range of books across all genres. Find your next favorite read, explore new releases, and enjoy great literature every day. Immerse yourself in a world of stories!</p>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>

</div>
<button className="btn btn-active btn-secondary mt-3">Get Started</button>
</div>
<div className=' order-1 w-full md:w-1/2 flex justify-center p-4 '>
<img src={banner} alt="This is stack of Books"  />
</div>
   </div>
   <FreeBook/>
   </>
  )
}

export default Banner
