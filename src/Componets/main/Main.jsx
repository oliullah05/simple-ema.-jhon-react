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

let total = 0;
let totalShipping =0;
for(let product of cart){
    total =total +product.price;
    totalShipping = totalShipping + product.shipping;
}
const tax = (total*7)/100;
const grandTotal = total+totalShipping+tax;




    return (
  <div className='flex container mx-auto gap-5'>
    <div className='grid grid-cols-3 container mx-auto bg-transparent-500 gap-3 basis-4/5'>
    {
        cards.map(card=><Card AddToCart={AddToCart} card={card}></Card>)
    }
    </div>
         <div className='basis-1/5 sticky top-0 left-0'>
               <Cart cart={cart} total={total} totalShipping={totalShipping} tax={tax} grandTotal={grandTotal}></Cart>
           </div>



  </div>
    );
};

export default Main;