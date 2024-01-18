import React from 'react';

const ToyTable = ({toy}) => {

  const {displayName, name, price, quantity, subCategory} = toy
  
  return (
    <>
      <tr className="bg-white border-b  hover:bg-gray-50 ">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
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