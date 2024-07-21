import React from 'react'

const Card = ({ item }) => {
    return (
        <>
            <div className="card bg-base-100 gap-2 w-70 md:w-80 shadow-xl my-5 hover:scale-105 duration-200">
                <figure>
                    <img
                        // src={item.imageUrl}
                        src='https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1721112860~exp=1721116460~hmac=d7f45173a65a404946b3bb6b49173f2def4118b853c3c088c9403e140988a7d1&w=740'
                        alt={item.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-md">
                        {item.name}!
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p className='text-sm'>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-3">${item.price}</div>
                        <div className="badge badge-outline hover:text-white hover:bg-pink-500 duration-200 p-3">Buy Now</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
