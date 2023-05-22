import React from 'react';
import Lottie from "lottie-react";
import loader from '../../../assets/lottie/loader.json'

const Loader = () => {
  return (
    <div className='flex'>
      <Lottie className='mx-auto w-1/3' animationData={loader}></Lottie>
    </div>
  );
};

export default Loader;