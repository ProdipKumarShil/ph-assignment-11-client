import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import deletePic from "../../assets/svg/delete.svg";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import Payment from "../shared/Payment/Payment";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [cart] = useCart();

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(total.toFixed(2));
    setTax((total * (3 / 100)).toFixed(2));
    setFinalTotal((parseFloat(total) + parseFloat(tax)).toFixed(2));
  };

  return (
    <div className="mx-auto px-2 max-w-screen-xl grid grid-cols-12 gap-4">
      <table class="w-full text-sm text-left text-gray-500  col-span-8">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
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
          {cart.map((cartItem) => (
            <TableRow key={cartItem._id} toy={cartItem} />
          ))}
        </tbody>
      </table>
      <div className="col-span-4">
        {/* <Payment /> */}
        <div className="rounded-lg shadow-lg p-4">
          <p className="text-3xl mb-5">Cart Totals</p>
          <div className="">
            <div className="flex justify-between items-center text-lg mb-3">
              <p>Sub total:</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between items-center text-lg mb-3">
              <p>Tax(3%):</p>
              <p>${tax}</p>
            </div>
            <div className="flex justify-between items-center text-lg mb-3">
              <p>Total:</p>
              <p>${finalTotal}</p>
            </div>
            {/* <button className="text-bg w-full bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">
              Proceed to Checkout
            </button> */}
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="text-bg w-full bg-primary rounded-full  font-medium  text-sm px-5 py-3 "
              type="button">
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          Toggle modal
        </button> */}
      </div>

      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative rounded-2xl bg-white shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Stripe Payment
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal">
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4">
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const TableRow = ({ toy }) => {
  const [, refetch] = useCart();
  const deleteItem = (userID, itemID) => {
    Swal.fire({
      title: "Are you sure to delete?",
      icon: "warning",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(
          `https://candyland-toys-server.vercel.app/deleteCart?toyId=${toy.toyId}&userEmail=${toy.userEmail}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount == 1) {
              Swal.fire({
                title: "Item Deleted",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr class="bg-white border-b   hover:bg-gray-50 ">
      <th
        scope="row"
        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
        <img class="w-12 h-12 rounded-full" src={toy.img} alt="Jese image" />
        <div class="ps-3">
          <div class="text-base font-semibold">{toy.name}</div>
        </div>
      </th>
      <td class="px-6 py-4">${toy.price}</td>
      <td class="px-6 py-4">
        <div class="flex items-center">{toy.category.toUpperCase()}</div>
      </td>
      <td class="px-6 py-4">
        <button
          class="font-medium flex justify-center items-center"
          onClick={deleteItem}>
          <img className="w-5 h-5" src={deletePic} alt="" />
        </button>
      </td>
    </tr>
  );
};
