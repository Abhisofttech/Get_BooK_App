import React from 'react'
import banner from '../assets/banner.png'
import FreeBook from '../Components/FreeBook'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const handleGetStarted = () => {
    navigate('/course');
  }
  return (
    <>
      <div className='max-w-screen-2xl container max-auto md:px-20 px-4 my-5 flex flex-col md:flex-row'>
        <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
          <div className="space-y-12">
            <h1 className='text-4xl font-bold text-white'>Hello, Welcome here to learn something <span className='text-pink-500'> new everyday!!! </span> </h1>
            <p > <span className='text-3xl '>W</span>elcome to our bookstore, where you'll discover a diverse range of books across all genres. Find your next favorite read, explore new releases, and enjoy great literature every day. Immerse yourself in a world of stories!</p>
          </div>
          <button className="btn btn-active btn-secondary mt-9" onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className=' order-1 w-full md:w-1/2 flex justify-center p-4 '>
          <img src={banner} alt="This is stack of Books" />
        </div>
      </div>
      <FreeBook />
    </>
  )
}

export default Banner
