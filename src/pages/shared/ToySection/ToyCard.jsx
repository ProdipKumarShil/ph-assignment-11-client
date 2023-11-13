import React from 'react';
import sale1 from '../../../assets/seals/seals0.png'
import { Link } from 'react-router-dom';
import UserRating from '../Rating/Rating';

const ToyCard = ({ toy }) => {
  const { _id, img, name, price, rating } = toy
  return (
    <div className=" mt-2  relative ">
      <Link to='#' className="block p-4 h-full  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  ">
        <img src={img} className='h-48 text-center mx-auto' alt="flash sale" />
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

        <UserRating />

        <p className=" text-gray-400 dark:text-gray-400 text-xl font-semibold"><span className='text-secondary text-2xl'>${price}</span></p>
      </Link>

      <div className="w-full h-full absolute duration-100 rounded-lg inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-50">
        <div className="w-full h-full relative">
          <Link to={`/singleToy/${_id}`} className="text-bg absolute center-div bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">Details</Link>
          <Link className="text-bg absolute center-div mt-14 bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">Add to cart</Link>
        </div>
      </div>

    </div>
  );
};

export default ToyCard;