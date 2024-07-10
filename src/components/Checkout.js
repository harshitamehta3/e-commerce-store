import React from 'react';
import { useCart } from '../CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-publishable-key-here');

const Checkout = () => {
  const { cart } = useCart();

  return (
    <Elements stripe={stripePromise}>
      <div>
        <h2>Checkout</h2>
        <CheckoutForm cart={cart} />
      </div>
    </Elements>
  );
};

export default Checkout;
