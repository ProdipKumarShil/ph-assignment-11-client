import React from 'react';
import Category from '../pages/shared/Category/Category';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../pages/shared/ToySection/ToyCard';

const Toys = () => {
  const toys = useLoaderData()
  console.log(toys)
  return (
    <div className='mx-auto px-2 max-w-screen-xl grid grid-cols-12 gap-4'>
      <Category />
      <div className="col-span-9 grid grid-cols-2 gap-4">
        {toys.map(toy => <ToyCard key={toy._id} toy={toy}/>)}
      </div>
    </div>
  );
};

export default Toys;