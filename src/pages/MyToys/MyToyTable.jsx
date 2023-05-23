import React, { useState } from 'react';
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

        fetch(`https://candyland-toys-server.vercel.app/getSellerToys/${_id}`, {
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

  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }

  const handleUpdateToy = e => {
    e.preventDefault()

    const form = e.target
    const price = form.price.value
    const quantity = form.quantity.value
    const description = form.description.value

    console.log(price, quantity, description)
    const updatedToys = {price, quantity, description}
    
    fetch(`https://candyland-toys-server.vercel.app/getSellerToys/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToys)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </th>
        <td className="px-6 py-4">
          {subCategory}
        </td>
        <td className="px-6 py-4">
          {price}
        </td>
        <td className="px-6 py-4">
          {quantity}
        </td>
        <td className="px-6 py-4 text-left">
          <button onClick={handleModal} className="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
          <button onClick={handleDelete}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
        </td>
      </tr> 


      <div className={modal ? ' absolute right-20 top-4 bg-white p-8 rounded-lg shadow-lg border mb-8' : ' absolute right-1/2 hidden'}>
        <form onSubmit={handleUpdateToy} className="">
          
          <div className="flex gap-4">
            <div>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input name='price' type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input name='quantity' type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
            <input name='description' type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className=" flex justify-between mx-4 mt-4">
            <input  className='text-center  font-medium  text-sm px-5 py-2 text-bg bg-primary cursor-pointer' type="submit" value='submit ' />
            <span onClick={handleModal} className='cursor-pointer text-center  font-medium  text-sm px-5 py-2 text-bg bg-primary'>cancel</span>
          </div>


        </form>
      </div>
      

      
    </>
  );
};

export default MyToyTable;