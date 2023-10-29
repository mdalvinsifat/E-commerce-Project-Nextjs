"use client"
import React ,{useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
 loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const HomePage = ()=> {

    const router = useRouter()
    const {session , cencel } = router.query

 useEffect(() => {
    const query = new URLSearchParams(window.location.search);
  if(session !== undefined || cencel !== undefined){
    if (session) {
        console.log('Order placed! You will receive an email confirmation.');
      }
  
      if (cencel) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
  }
  }, [session, cencel ]);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}

export default HomePage;