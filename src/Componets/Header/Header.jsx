import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto py-4  bg-blue-300 flex justify-between'>
         <div><h1 className='pl-4 text-4xl font-bold '>Ema-John</h1></div>
         <div className='text-2xl flex gap-6'>
            <a href="">Order</a>
            <a href="">Order Review</a>
            <a href="">Manage Inventory</a>
            <a href="">Login</a>
            </div>   
        </div>
    );
};

export default Header;