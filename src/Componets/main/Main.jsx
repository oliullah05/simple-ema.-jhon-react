import React, { useEffect, useState } from 'react';
import Cart from '../Cart';
import Card from './Card';

const Main = () => {
const [cards ,setCard]=useState([]);
useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=>res.json())
    .then(data=>setCard(data))
},[])
// console.log(cards)
const [cart,setCart]=useState([]);

const AddToCart =(product)=>{
const cartArr = [...cart,product];
setCart(cartArr)
}















    return (
  <div className='flex container mx-auto gap-5'>
    <div className='grid grid-cols-3 container mx-auto bg-transparent-500 gap-3 basis-4/5'>
    {
        cards.map(card=><Card AddToCart={AddToCart} card={card}></Card>)
    }
    </div>
         <div className='basis-1/5'>
            <p>{cart.length}</p>
               <Cart></Cart>
           </div>



  </div>
    );
};

export default Main;