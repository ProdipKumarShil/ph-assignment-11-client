import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../ToySection/ToyCard';

const ToyCategory = () => {
  const toys = useLoaderData()
  console.log(toys)
  return (
    <div className='mx-auto px-2 max-w-screen-xl'>
      {toys.map((toy, index) => <ToyCard key={toy._id} toy={toy}/>)}
    </div>
  );
};

export default ToyCategory;