import React, { useContext } from 'react';
import sale1 from '../../../assets/seals/seals0.png'
import { Link, useNavigate } from 'react-router-dom';
import UserRating from '../Rating/Rating';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const ToyCard = ({ toy }) => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const [,refetch] = useCart()
  const cartItem = {toyId: toy?._id, name: toy?.name, rating: toy?.rating, img:toy?.img, price: toy?.price, userEmail: user?.email, category: toy?.category, quantity: 1}
  // console.log(cartItem)

  const addToCart = () => {
    fetch('https://candyland-toys-server.vercel.app/addCart', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then(data => {
        if(data.success){
          refetch()
          Swal.fire({
            title: "Good job!",
            text: "Item added to cart!",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Opps...!",
            text: "Failed to added cart!",
            icon: "error"
          });
        }
      })
  }

  const handleAddCart = () => {
    if(user?.email){
      return addToCart()
    } else {
      return navigate('/login')
    }
  }
  
  const { _id, img, name, price, rating } = toy
  return (
    <div className=" mt-2  relative ">
      <Link to='#' className="block p-4 h-full  bg-white border border-gray-200 rounded-lg shadow    ">
        <img src={img} className='h-48 text-center mx-auto' alt="flash sale" />
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{name}</h5>

        <UserRating />

        <p className=" text-gray-400  text-xl font-semibold"><span className='text-secondary text-2xl'>${price}</span></p>
      </Link>

      <div className="w-full h-full absolute duration-100 rounded-lg inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-50">
        <div className="w-full h-full relative">
          <Link to={`/singleToy/${_id}`} className="text-bg absolute center-div bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">Details</Link>
          <button onClick={handleAddCart} className="text-bg absolute center-div mt-14 bg-primary rounded-full  font-medium  text-sm px-5 py-3 ">Add to cart</button>
        </div>
      </div>

    </div>
  );
};

export default ToyCard;