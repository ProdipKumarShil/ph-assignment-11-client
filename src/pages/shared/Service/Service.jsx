import React from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiAnatomy } from "react-icons/gi";
const Service = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <h2 className='text-6xl mb-3 mt-4 text-center'>Our Services</h2>
      <div className="grid grid-cols-4 justify-items-center ">
        <div className="bg-primary p-4 rounded text-gray-700 hover:text-black hover:scale-105 duration-100">
          <MdOutlineLocalShipping className='text-8xl mx-auto'/>
          <h3 className='text-2xl font-semibold'>Free Home Delivery</h3>
        </div>
        <div className="bg-primary p-4 rounded text-gray-700 hover:text-black hover:scale-105 duration-100">
          <BsHeadset className='text-8xl mx-auto'/>
          <h3 className='text-2xl font-semibold'>24/7 hour support</h3>
        </div>
        <div className="bg-primary p-4 rounded text-gray-700 hover:text-black hover:scale-105 duration-100">
          <GiTakeMyMoney className='text-8xl mx-auto'/>
          <h3 className='text-2xl font-semibold'>Money Back Grantee</h3>
        </div>
        <div className="bg-primary p-4 rounded text-gray-700 hover:text-black hover:scale-105 duration-100">
          <GiAnatomy className='text-8xl mx-auto'/>
          <h3 className='text-2xl font-semibold'>100% Privacy Security</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Service;