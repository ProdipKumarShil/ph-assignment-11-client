import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="hidden md:block col-span-12 md:col-span-3 mt-2">
      <h4 className='text-xl font-semibold text-bg bg-primary py-2 px-3 mb-2'>Toys Category</h4>
      <ul className="w-full   font-semibold text-xl text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <Link to='/category'>
          <li className="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Car </li>
        </Link>
        <Link>
          <li className="w-full px-4 py-4 border-b border-gray-200 dark:border-gray-600">Animal </li>
        </Link>
        <Link>
          <li className="w-full px-4 py-4 border-b border-gray-200 dark:border-gray-600">Dolls</li>
        </Link>
        <Link>
          <li className="w-full px-4 py-4 border-b border-gray-200 dark:border-gray-600">Lego</li>
        </Link>
        <Link>
          <li className="w-full px-4 py-4 rounded-b-lg">Marvel</li>
        </Link>
      </ul>

    </div>
  );
};

export default Category;