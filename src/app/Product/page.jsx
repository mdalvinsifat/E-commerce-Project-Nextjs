"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useCard } from '../context/CardContext';

const Product = () => {
const [card, setCard ] = useCard()
const [data , setData] = useState([])
const Products = async()=>{
    try {
        const response = await fetch("http://localhost:3000/api/user")
        const res =await response.json()
        setData(res.product)
   n
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
Products()
},[])
    return (
        <div>
            <div className='grid d-flex grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-30 '>
            
               {
                    data.map(item =>(
                    
                      <div >
                           <Link href={`/Product/${item._id}`}>
            
                <img src={item.image} alt="" srcset="" width={500} height={500} className='w-full h-80 object-cover mt-6 hover:scale-110 duration-200 rounded-t-lg' />
            </Link>
               
               <div className="border-[1px] bg-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-bl-lg">
                <h1>{item.title}</h1>
               <div className="flex">
              <button onClick={() => {setCard([...card, item]); localStorage.setItem('card', JSON.stringify([...card,item])) ,toast.success("item add to card") }}
              
              className='bg-orange-600 py-3 px-3 rounded-full hover:bg-white hover:text-black  text-white  '>
              Add to card
              </button>
               <div className="ms-auto me-6">
                <del>{
                    item.price * 1.5
                    }</del>
               </div>
                  <div className="">
                  <h2>{item.price}</h2>
                  </div>
               </div>
               
               </div>
                    </div>
                  ))
                }
               
            </div>

            <Toaster/>
        </div>
    );
};

export default Product;