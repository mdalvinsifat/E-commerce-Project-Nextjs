"use client"
import React from 'react';
import Logo from './Logo';
import {IoMdCart } from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase';
import { signOut } from 'firebase/auth';
import { useCard } from '../context/CardContext';

const Header = () => {
  const [user ] = useAuthState(auth)
  const [card, setCard ] = useCard()
const handleLogin = () =>{
  signOut(auth)
}
    return (
        <div className='bg-bodyColor h-20 w-full'>
            <div className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
                <Logo/>

<div className="w-full hidden md:flex items-center sm:flex gap-x-1 border-[1px] border-lightText/50 rounded-full px-5 py-1.5 focus-within:border-orange-600">
    <FiSearch></FiSearch>
<input type="text" placeholder='Search For Product' className='placeholder:text-sm flex-1 outline-none '  />
</div>
                <div>
                   
              <div className="flex">
             <Link href={"/login"}>
             {
              user ?
              <div className="bg-bgLight text-gray-500 flex items-center justify-center p-2 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500">
                <AiOutlineUser></AiOutlineUser>
                <button className='text-sm font-semibold' onClick={handleLogin}>Login/Register</button>
               </div> 
               : 
               <div className="bg-bgLight text-gray-500 flex items-center justify-center p-2 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500">
               <AiOutlineUser></AiOutlineUser>
               <p className='text-sm font-semibold'>LogOut</p>
              </div> 
             }
             {
            <h1 className='text-red'>{user?.email}</h1>
             }
             </Link>

              
              <Link href={"/cart"}>
              <div className="bg-black hover:bg-slate-950 ms-3 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">
              {
                card?.map(p =>{
                  <>
                  {p.price}
                  </>
                })
              }
            </p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            {card?.length}
            </span>
          </div>
                </Link>
            </div>
              </div>
            </div>


            
        </div>
    );
};

export default Header;