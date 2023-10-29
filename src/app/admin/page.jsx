"use client"
import React, { useState } from 'react';
import Logo from '../Layout/Logo';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'
const page = () => {

    const [username , setusername ]= useState("")
    const [password , setPassword]= useState("")
    const router = useRouter()

    const SignIn = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/api/auth/login`,{
                username,
                password
            })
          if(res && res.data.success){
            router.push("/admin/create")
          }
        else{
            alert("Error")
          }
        } catch (error) {
            console.log(error)
            router.push("/")
        }
    }


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <Logo/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Admin Panel Access Now !
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={SignIn}>
            <div>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  placeholder='UserName'
                  value={username}
                  onChange={(e ) => setusername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e ) => setPassword(e.target.value)}
                  placeholder='Password ! '
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Admin Panel Access Now 
              </button>
            </div>
          </form>

         
        </div>
      </div>
    );
};

export default page;