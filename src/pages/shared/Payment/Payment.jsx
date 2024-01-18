import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'

// provide publishable key
const  stripePromise = loadStripe(import.meta.env.VITE_PK_KEY)

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Payment