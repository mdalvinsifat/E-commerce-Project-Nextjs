import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import auth from '../../../Firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Link from 'next/link';
const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <Link href={"/"}>
          
          </Link>
        );
      }

      
    return (
        <div>
            <div className="flex bg-indigo-900 rounded-lg p-2 justify-center cursor-pointer">
    <FcGoogle className='mt-2 '/>
    <p className='text-xl font-sans text-white ms-2' onClick={() => signInWithGoogle()}>Google</p>
</div>
        </div>
    );
};

export default Google;