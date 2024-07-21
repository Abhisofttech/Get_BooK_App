import React , {useState , useEffect}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Card from './Card';

const FreeBook = () => {
  

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await  axios.get('https://get-book-app-backend.onrender.com/book');
        // console.log(res.data);
        setBook(res.data.filter((data) => data.category === 'Free'));
        // console.log(book)

      } catch (err) {
        console.log(err);
      }
    }
    getBook();
  }, [])
 

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container max-auto mb-4 md:px-20 px-4'>
        <div>
        <h1 className='text-2xl font-semibold text-white'>Free Books Offered</h1>
        <p >Explore our bookstore and enjoy a diverse collection of free books, available to everyone. Dive into various genres and discover new favorites, all at no cost! Happy reading!</p>
        </div>
        <div className='m-6  p-9'>
          <Slider {...settings}>
            {book.map((item)=>(
              <Card item={item} key={item.id} />
            ))}
          </Slider>
          </div>
      </div>
    </>
  )
}

export default FreeBook
