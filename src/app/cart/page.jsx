"use client"
import React from 'react';
import { useCard } from '../context/CardContext';
import { useRouter } from 'next/navigation';
const page = () => {
    const [card, setCard ] = useCard()


    const totalPrice = () =>{
        try {
            let total = 0 ;
            card?.map(item => {total = total + item.price})
            return total.toLocaleString("en-US",{
                style:"currency",
                currency:"USD"
            })
        } catch (error) {
            console.log(error)
        }
    }
   const removeCard = (pid) =>{
    try {
        let mycard = [...card ]
        let index = mycard.findIndex(item => item._id === pid)
        mycard.splice(index, 1)
        setCard(mycard)
        localStorage.setItem("card", JSON.stringify(mycard))
    } catch (error) {
        console.log(error)
    }
   }

   const router = useRouter()

    return (
        <div>

            
           {
            card?.map(p => (
                <div className='flex'>
                <div >
                <img src={p.image} alt="" srcset="" width={200} height={200} className='m-5 rounded-2xl'/>
                </div>

                <div className='mt-5'>
                <h1 className='text-2xl'>{p.title}</h1>
                <h3> Price : ${p.price}</h3>
                <button className='bg-red-500 mt-3 rounded-lg p-2 text-white' onClick={() => removeCard(p._id)}>Remove </button>
                </div>
                </div>
            ))
           }


    
<div>
    <h1 className='text-3xl mb-3 ms-5'> Card Summary  </h1>
    <h3> Total || CheckOut || Payment </h3>
    <h4> Total Price : {totalPrice()} </h4>
<button onClick={() => router.push('/payment')} className="bg-black text-white px-5 py-3 mb-3 ms-5"> Check Out Now </button>

</div>
        </div>
    );
};

export default page;     