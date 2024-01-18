import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'

// provide publishable key
const  stripePromise = loadStripe(import.meta.env.VITE_PK_KEY)

const Payment = ({price}) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  )
}

export default Payment