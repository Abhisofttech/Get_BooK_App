import React from 'react'
import Card from '../Components/Card'
import bookList from '../assets/bookList.json'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container max-auto md:px-20 px-4 mt-32'>
        <div className='text-center item-center justify-center space-y-6'>
          <h1 className='text-3xl text-white font-semibold '>We're delighted to have you <span className='text-pink-500'> Here! :)</span></h1>
          <p>Welcome to our extensive book collection, where you'll find a diverse selection of books across various genres. Whether you're looking for fiction, non-fiction, educational, or inspirational reads, we have something for every reader. Explore our carefully curated selection, featuring both bestsellers and hidden gems. Our collection is updated regularly to bring you the latest and greatest in literature. Enjoy browsing through our free and paid books, and discover your next great read today! Dive into a world of knowledge, adventure, and inspiration with our vast array of books. Happy reading!</p>
          <button className="btn btn-active btn-secondary mt-3 hover:bg-pink-700 duration-300"> <Link to='/'>Back </Link>   </button>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-9'>
          { 
          
          bookList.map((item)=>(
            <Card item={item} key={item.id} />
          ))
          
          }
        </div>
      </div>
    </>
  )
}

export default Course
