import React from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase';

import {FaFacebook} from 'react-icons/fa'
const Facebook = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
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
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }
    return (
        <div className="flex bg-indigo-900 rounded-lg p-2 justify-center ms-7 ms-auto cursor-pointer">
        <FaFacebook className='mt-2 text-indigo-500'/>
        <p className='text-xl font-sans text-white ms-2' onClick={() => signInWithFacebook()}>Facebook</p>
    </div>
    );
};

export default Facebook;