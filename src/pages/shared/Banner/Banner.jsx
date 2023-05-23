import { Link } from 'react-router-dom'
import img1 from '../../../assets/banner/all2.jpg'
import img2 from '../../../assets/banner/all3.jpg'
import img3 from '../../../assets/banner/all4.jpg'
import img4 from '../../../assets/banner/all5.jpg'
import img5 from '../../../assets/banner/all6.jpg'
import sale1 from '../../../assets/seals/seals0.png'
import Category from '../Category/Category'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick'
import React from 'react'

const Banner = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className='mx-auto max-w-screen-xl grid grid-cols-12 gap-3'>
      {/* categories */}
      <Category></Category>

      {/* Carousel  */}
      

      {/* react carousel */}

      <div className="md:col-span-6 col-span-12 mt-2">
        <Slider className='' {...settings}>
          
          <div>
            <img className='h-[390px] rounded-lg w-full' src={img2} alt="" />
          </div>
          <div>
            <img className='h-[390px] rounded-lg w-full' src={img3} alt="" />
          </div>
          <div>
            <img className='h-[390px] rounded-lg w-full' src={img4} alt="" />
          </div>
          <div>
            <img className='h-[390px] rounded-lg w-full' src={img5} alt="" />
          </div>
          
        </Slider>
      </div>
      
      {/* react carousel */}

      {/* flash sale */}
      <div className="p-4 md:p-0 col-span-12 md:col-span-3 mt-2 relative">
        <h4 className='text-xl font-semibold text-bg bg-primary py-2 px-3 mb-2'>Flash Hour</h4>
        <Link to='#' className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
          <img src={sale1} className='h-48 text-center mx-auto' alt="flash sale" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Groot</h5>

          <div className="flex items-center justify-center">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>

          <p className=" text-gray-400 dark:text-gray-400 text-xl font-semibold"> <del>$50</del> <span className='text-secondary text-2xl'>$45</span></p>
          <kbd className="absolute top-[65px] right-9 px-2 py-1.5 text-xs font-semibold text-gray-800  bg-secondary border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">-10%</kbd>
        </Link>

      </div>
    </div>
  );
};

export default Banner;