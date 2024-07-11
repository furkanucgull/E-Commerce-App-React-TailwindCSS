// BasketDetails.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Basket from '../pages/Basket'; // Basket bileşeninizin doğru yolu olduğundan emin olun

function BasketDetails() {
  const products = useSelector(state => state.basket.products);
  console.log(products);

  return (
    <div className=" ">
      <div className=" mt-6 text-2xl font-bold bg-stone-100 rounded-lg  w-6/12 h-24">
        <h2 className=" m-5 ">Shopping Cart ({products.length})</h2>
      </div>

      {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col mt-4 gap-6">
          {products.map(product => (
            <Basket key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BasketDetails;
