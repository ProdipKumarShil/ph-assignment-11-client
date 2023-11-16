import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAddToCart = (itemID) => {
  // const {user} = useContext(AuthContext)
  // console.log(user)
  // fetch('http://localhost:5000/addCart', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       userID, itemID, quantity: 1
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if(data.success){
  //         Swal.fire({
  //           title: "Good job!",
  //           text: "Item added to cart!",
  //           icon: "success"
  //         });
  //       } else {
  //         Swal.fire({
  //           title: "Opps...!",
  //           text: "Failed to added cart!",
  //           icon: "error"
  //         });
  //       }
  //     })
};

export default useAddToCart;