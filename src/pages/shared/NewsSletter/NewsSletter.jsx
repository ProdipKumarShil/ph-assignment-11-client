import React from 'react';
import { BiMailSend } from "react-icons/bi";

const NewsSletter = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-4 my-2">
      <div className=' border rounded-lg shadow p-4'>
        <h1 className='mb-4 text-center my-8 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white'>Sign up for our newsletter</h1>
        <p className='mx-auto text-center mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400'>Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>

        <div className=''>
          <div className="flex justify-center">
            <label htmlFor="location-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
            <button id="dropdown-button-2" data-dropdown-toggle="dropdown-search-city" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
              <BiMailSend className='text-xl'/>
              </button>

            <div className="relative w-[60%] ">
              <input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Your Email" />
              <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <p>Subscribe</p>
                {/* <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>

        <p className='text-center mt-2 mb-8 text-gray-600 text-sm'>We care about the protection of your data. <span className='text-blue-700'>Read our Privacy Policy.</span></p>

      </div>
    </div>
  );
};

export default NewsSletter;