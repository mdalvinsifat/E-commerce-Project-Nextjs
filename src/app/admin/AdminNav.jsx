import Link from 'next/link';
import React from 'react';

const AdminNav = () => {
    return (
        <div className='ms-20'>
            <Link href={"/admin/dashboard"} >
                <h2 className='bg-sky-600 p-5 text-white w-40 mb-5 w-full '>DashBoard </h2>
            </Link>
            <Link href={"/admin/create"}>
                <h2 className='bg-sky-600 p-5 text-white w-40 mb-5 w-full '>Product Create </h2>
            </Link>
            <Link href={"/admin/view"}>
                <h2 className='bg-sky-600 p-5 text-white w-40 mb-5 w-full'> Product View </h2>
            </Link>
            
        </div>
    );
};

export default AdminNav;