import React from 'react';
import AdminNav from '../AdminNav';

const page = () => {
    return (
        <div className='flex'>
          
            <div className="">
                <AdminNav/>
            </div>

            <div className='ms-center text-3xl '>
            <h1> Admin Dashboard </h1>
            </div>
        </div>
    );
};

export default page;