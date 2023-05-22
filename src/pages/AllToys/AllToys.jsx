import React, { useEffect, useState } from 'react';
import ToyTable from '../shared/ToyTable/ToyTable';
import Loader from '../shared/Loader/Loader';

const AllToys = () => {

  const [toys, setToys] = useState(null)

  useEffect( () => {
    fetch('https://candyland-toys-server.vercel.app/getSellerToys')
      .then(res => res.json())
      .then(data => setToys(data))
  } , [])

  if(!toys){
    return <Loader></Loader>
  }
  
  return (
    <div className='mx-auto max-w-screen-xl'>
      <h2 className='text-2xl font-medium my-4 ml-4'>All Toys</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Seller name
              </th>
              <th scope="col" className="px-6 py-3">
                Toy name
              </th>
              <th scope="col" className="px-6 py-3">
                Sub category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Available Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {
              toys.map(toy => <ToyTable key={toy._id} toy={toy}></ToyTable>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllToys;