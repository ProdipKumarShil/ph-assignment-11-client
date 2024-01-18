import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import card from '../../../assets/temp/creadit2.png'

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

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
