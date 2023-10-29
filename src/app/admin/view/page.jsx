"use client"
import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav';
import Link from 'next/link';
import axios from 'axios';

const page = () => {

    const [people , setPeple] = useState([])

    const Products = async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/user")
            const res =await response.json()
            setPeple(res.product)
       n
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
    Products()
    },[])

    const DeleteProduct = async(id) =>{
        try {
axios.delete(`http://localhost:3000/api/user/${id}`)
            Products()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex'>
           <div>
            <AdminNav/>
           </div>

           <div className='ms-10'>
           <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.image} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">available</p>
              </div>
            )}
          </div>
         <div className="flex">
       <Link href={`/admin/create/${person._id}`}>
       <button className='bg-sky-500 px-4 py-2 text-white ms-20'> Edit </button>
       </Link>
         <button className='bg-red-700 px-4 py-2 text-white ms-3' onClick={() =>DeleteProduct(person._id) }> Delete </button>
         </div>
        </li>

      ))}


    </ul>
           </div>
        </div>
    );
};

export default page;