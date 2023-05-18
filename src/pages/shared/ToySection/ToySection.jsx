import React from 'react';
import ToyCard from './ToyCard';


const ToySection = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className="">
        <h4 className='text-xl font-semibold text-bg bg-primary py-2 px-3 my-2'>All Category</h4>

      </div>

      <div className="grid grid-cols-4 gap-4">
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
        <ToyCard></ToyCard>
      </div>

    </div>
  );
};

export default ToySection;