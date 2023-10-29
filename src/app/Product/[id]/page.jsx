'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const {id} = useParams()
    const [data , setData] = useState([])
    const [product , setProduct] = useState([])

    const Products = async()=>{
            const response = await fetch(`http://localhost:3000/api/user/${id}`)
            const res =await response.json()
            setData(res.product)
        
    }
    
    useEffect(()=>{
    Products()
  
    },[])


 
  


    return (
        <>
        <div className='flex'>
            <div className="ms-5">
<img src={data.image} alt="" srcset="" className='rounded-lg w-full h-full' />
            </div>

            <div className="ms-5">
                <h1 className='text-4xl font-semibold'>{data.title}</h1>
                <p className='text-2xl font-semibold mt-4'>${data.price}</p>
              <div className='mt-6 w-80 h-40'>
                <p className='font-mono'>{data.description}</p>
              </div>

              <p>SKU:{data.rating}</p>
              <p>Category :  {data.category}</p>
            </div>
        </div>


        
        </>
    );
};

export default page;