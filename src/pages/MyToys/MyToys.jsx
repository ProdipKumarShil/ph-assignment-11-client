import React, { useContext, useEffect, useState } from 'react';
import MyToyTable from './MyToyTable';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from '../shared/Loader/Loader';

const MyToys = () => {

  const {user} = useContext(AuthContext)
  const [myToys, setMyToys] = useState(null)
  console.log(myToys)

  useEffect( () => {
    fetch(`https://candyland-toys-server.vercel.app/getSellerToysByEmail?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  } , [])
  if(!myToys){
    return <Loader></Loader>
  }

  
  return (
    <div className='mx-auto max-w-screen-xl'>
      <h2 className='text-2xl font-medium my-4 ml-4'>My Toys</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
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
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              myToys.map(myToy => <MyToyTable key={myToy._id} myToy={myToy}></MyToyTable>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );

  
};

export default MyToys;