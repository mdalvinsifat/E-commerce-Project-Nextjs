"use client"

import React, { useEffect, useState } from 'react';
import FileBase from 'react-filebase64'
import AdminNav from '../../AdminNav';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
const page = () => {

const {id} = useParams()
const router = useRouter()
    const [title ,setTitle] = useState("")
const [description ,setDescription] = useState("")
const [image ,setImage] = useState("")
const [quantity ,setQuantity] = useState("")
const [price ,setprice] = useState("")
const [oldPrice,setOldPrice] = useState("")
const [rating ,setRating] = useState("")
const [category ,setCategory] = useState("")

useEffect(() =>{

    const ReadData = async() =>{
        try {
            const {data} = axios.get(`http://localhost:3000/api/user/${id}`)
            setTitle(data.product.title),
            setPrice(data.product.price),
            setOldPrice(data.product.oldPrice),
            setCategory(data.product.category),
            setImage(data.product.image),
            setRating(data.product.rating),
            setDescription(data.product.description),
            setQuantity(data.product.quantity)
        } catch (error) {
            console.log(error)
        }
    }
},[])



const handleSubmite = async(e)=>{
    e.preventDefault()
try {
    axios.put(`http://localhost:3000/api/user/${id}`,{
        title,
        image,
        description,
        price,
        quantity,
        oldPrice,
        rating,
        category
    })
    router.push("/admin/view")
} catch (error) {
    console.log(error)
}
}
    return (
        <div className='flex'>
<div>
    <AdminNav/>
</div>



<div className='flex justify-center items-center ms-40'>
            <form onSubmit={handleSubmite}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Title Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                 value={title}
                 onChange={(e) => setTitle(e.target.value) }
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
         

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription (e.target.value) }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

        

            <div className="col-span-full">
             
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                
              <FileBase type="file" 
    required
multiple={false}  onDone={({base64}) => setImage(base64)} />               
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
             Old Price 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={oldPrice}
                  onChange={(e) => setOldPrice(e.target.value) }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Price 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={price}
                  onChange={(e) => setprice(e.target.value) }
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Category 
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="email"
                  value={category}
                  onChange={(e) => setCategory(e.target.value) }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="email"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value) }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

        

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
               Rating 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  value={rating}
                  onChange={(e) => setRating(e.target.value) }
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 mb-20 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm mb-20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
            </div>


        </div>
    );
};

export default page;