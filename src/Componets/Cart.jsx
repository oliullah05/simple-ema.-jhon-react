import React from 'react';

const Cart = () => {

    return (
        <div className='bg-slate-300 py-20'>
           <h2 className='text-3xl font-bold py-2'>Order Summary</h2> 
           <p>Selected Items:</p>
           <p className='py-2'>Total price :</p>
           <p>Total shipping charge :</p>
           <p className='py-2'>Tax :</p>
           <p>Grind Total :</p>
           <button className='text-white bg-indigo-800 px-5 py-3 rounded block my-4'>Clear CArt</button>
           <button className='text-white bg-indigo-800 px-5 py-3 rounded block'>Review Order</button>
        </div>
    );
};

export default Cart;