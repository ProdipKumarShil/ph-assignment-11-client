import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import deletePic from '../../assets/svg/delete.svg'
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const {user} = useContext(AuthContext)
  const [cart] = useCart()
  console.log(cart)

  

  // useEffect(() => {
  //   Promise.all([
  //     fetch(`https://candyland-toys-server.vercel.app/carts/${user.uid}`),
  //     fetch('https://candyland-toys-server.vercel.app/allToys')
  //   ])
  //     .then(([resCarts, resToys]) => 
  //       Promise.all([resCarts.json(), resToys.json()])
  //     )
  //     .then(([cartIDs, toys]) => {
  //       const ids = cartIDs.map(cartID => cartID.itemID)
  //       const matchingToys = toys.filter(toy => ids.includes(toy._id))
  //       setCartItems(matchingToys)
  //     })
  // }, [user.uid])

  return (
    <div className="mx-auto px-2 max-w-screen-xl">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              category
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(cartItem => <TableRow  key={cartItem._id} toy={cartItem} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Cart;

const TableRow = ({toy}) => {
  const {user} = useContext(AuthContext)
  
  const deleteItem = (userID, itemID) => {
    fetch('http://localhost:5000/deleteItem', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userID, itemID})
    })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount == 1){
          console.log(data)
          Swal.fire({
            title: "Good job!",
            text: "Item added to cart!",
            icon: "success"
          });
        }
      })
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <img
          class="w-12 h-12 rounded-full"
          src={toy.img}
          alt="Jese image"
        />
        <div class="ps-3">
          <div class="text-base font-semibold">{toy.name}</div>
        </div>
      </th>
      <td class="px-6 py-4">${toy.price}</td>
      <td class="px-6 py-4">
        <div class="flex items-center">
          {(toy.category).toUpperCase()}
        </div>
      </td>
      <td class="px-6 py-4">
        <button class="font-medium flex justify-center items-center" onClick={() => deleteItem(user.uid, toy._id)}><img className="w-5 h-5" src={deletePic} alt="" /></button>
      </td>
    </tr>
  );
};
