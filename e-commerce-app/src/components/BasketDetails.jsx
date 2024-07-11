// BasketDetails.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Basket from '../pages/Basket'; // Basket bileşeninizin doğru yolu olduğundan emin olun

function BasketDetails() {
  const products = useSelector(state => state.basket.products);
  console.log(products);

  return (
    <div>
      <h2>Sepet</h2>
      {products.length === 0 ? (
        <p>Sepetiniz boş</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products.map(product => (
            <Basket key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BasketDetails;
