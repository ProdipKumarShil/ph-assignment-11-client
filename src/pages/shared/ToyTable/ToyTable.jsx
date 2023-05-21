import React from 'react';

const ToyTable = ({toy}) => {

  const {displayName, name, price, quantity, subCategory} = toy
  
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {displayName}
        </th>
        <td className="px-6 py-4">
          {name}
        </td>
        <td className="px-6 py-4">
         {subCategory}
        </td>
        <td className="px-6 py-4">
          {price}
        </td>
        <td className="px-6 py-4">
          {quantity}
        </td>
      </tr>
    </>
  );
};

export default ToyTable;