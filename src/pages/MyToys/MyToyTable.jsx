import React from 'react';
import Swal from 'sweetalert2';

const MyToyTable = ({myToy}) => {
  const { _id ,name, subCategory, quantity, price} = myToy

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        console.log('delete')

        fetch(`http://localhost:5000/getSellerToys/${_id}`, {
          method: "DELETE", 
          
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else{
        console.log('cancled')
      }
    })
  }
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </th>
        <td class="px-6 py-4">
          {subCategory}
        </td>
        <td class="px-6 py-4">
          {price}
        </td>
        <td class="px-6 py-4">
          {quantity}
        </td>
        <td class="px-6 py-4 text-left">
          <button  class="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
          <button onClick={handleDelete}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
        </td>
      </tr> 
    </>
  );
};

export default MyToyTable;