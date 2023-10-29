import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
            <Link href={"/"}>
        <div>
                <h1 className='text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200'>Smart</h1>
        </div>
            </Link>
    );
};

export default Logo;