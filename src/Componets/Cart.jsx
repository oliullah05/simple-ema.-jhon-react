import React from 'react';

const Cart = (props) => {
    // console.log(props)

    return (
        <div className='bg-slate-300 py-20'>
           <h2 className='text-3xl font-bold py-2'>Order Summary</h2> 
           <p>Selected Items:{props.cart.length}</p>
           <p className='py-2'>Total price : {props.total} </p>
           <p>Total shipping charge :{props.totalShipping}</p>
           <p className='py-2'>Tax : {props.tax}</p>
           <p>Grind Total : {props.grandTotal}</p>
           <button className='text-white bg-indigo-800 px-5 py-3 rounded block my-4'>Clear CArt</button>
           <button className='text-white bg-indigo-800 px-5 py-3 rounded block'>Review Order</button>
        </div>
    );
};

export default Cart;