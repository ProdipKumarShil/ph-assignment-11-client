import React from 'react';
import Lottie from "lottie-react";
import anim from '../../assets/lottie/error.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex flex-col'>
      <Lottie className='p-8 mx-auto' animationData={anim}/>
      <p className='text-center mb-4 text-3xl'>Page Not Found!!!</p>
      <Link to={`/`} className="text-bg bg-primary w-1/4 mx-auto text-center rounded-full  font-medium  text-sm px-5 py-3 ">Home</Link>
    </div>
  );
};

export default ErrorPage;