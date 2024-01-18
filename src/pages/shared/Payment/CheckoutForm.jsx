import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import card from '../../../assets/temp/creadit2.png'
import { AuthContext } from "../../../provider/AuthProvider";

const CheckoutForm = ({price}) => {
  const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const usrObj = {name: user.displayName, email: user.email}
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    if(price > 0){
      fetch('http://localhost:5000/stripe-intent', {
      method: "POST", 
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({price: price * 100})
    })
      .then((res) => setClientSecret(res))
      .catch(e => console.log(e.message))
    
      
    }
    else{
      return
    }
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user.displayName, email: user.email
        }
      }
    })

    if(intentError){
      console.log(intentError)
    }

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src={card} alt="" />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="text-bg mt-4 w-full bg-primary rounded-full  font-medium  text-sm px-5 py-3 " type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-sm text-red-600">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
