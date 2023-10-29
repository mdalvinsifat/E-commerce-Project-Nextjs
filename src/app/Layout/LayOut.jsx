import React from 'react';
import Header from './Header';

const LayOut = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-16 py-5">
            <Header></Header>
            {children}
         
        </div>
    );
};

export default LayOut;