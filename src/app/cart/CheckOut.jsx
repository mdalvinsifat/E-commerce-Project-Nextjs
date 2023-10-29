
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useCard } from '../context/CardContext';
import axios from 'axios';


const CheckOut = ({amount}) => {
    const [card , setCard] = useCard()
    const stripes = useStripe()
    const elements = useElements()
    const handleSubmite = async(e) =>{
        e.preventDefault()
        if(elements==null){
            return 
        }
        const {errorSumite} =  await elements.submit()
        if(errorSumite){
            return;
        }

        const res = await axios.post("/api/create-api")

        const secrentKey = await res.json()
        console.log(secrentKey)

        const {error} = await stripes.confirmPayment({
            clientSecret:secrentKey,
            elements,
            confirmParams:{
                return_url:"http://localhost:3000/"
            }
        })

    }


    return (
        <div className="flex justify-center items-center w-full flex-col ">
            <h1>amount Pay {card?.price}</h1>
    <from onSubmite = {handleSubmite} className="max-w-md">
        <PaymentElement/>
        <button className="bg-black text-white p-2 mt-4 mb-5">Pay Now</button>
    </from>
        </div>
    );
};

export default CheckOut;