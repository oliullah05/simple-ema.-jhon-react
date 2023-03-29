import React from 'react';


const Card = (props) => {
    // console.log(props.card);
    const { img, name, price, seller, ratings } = props.card;
   
  const AddToCart=props.AddToCart;





    return (
        <div className='shadow-xl rounded-xl'>
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <p>price : {price}</p>
                <div className="card-actions">
                    <button onClick={()=>{
                        AddToCart(props.card)
                    }} className="btn btn-primary mx-auto">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;