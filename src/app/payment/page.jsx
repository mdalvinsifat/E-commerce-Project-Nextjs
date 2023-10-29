"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';

import React from 'react';
import CheckOut from '../cart/CheckOut';

const page = () => {
    const searchparams = useSearchParams()
    const amount = searchparams.get('amount')
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    const options ={
        mode:"payment",
        amount:Math.round(amount+100),
        currency:'usd'
    }
    return (
        <div>
      <Elements stripe={stripePromise} options={options}>
<CheckOut amount ={amount}/>
      </Elements>
        </div>
    );
};

export default page;