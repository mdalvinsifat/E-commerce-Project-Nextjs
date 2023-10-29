'use client'
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import {useSession} from 'next-auth/react'
const page = () => {

    const stripe = loadStripe(process.env.SECRENT_URL)
    const {data } = useSession()
    const handleClick = async () =>{
        console.log(process.env.SECRENT_URL)
    }
    return (
        <div>
            <button onClick={handleClick}>Button</button>
        </div>
    );
};

export default page;