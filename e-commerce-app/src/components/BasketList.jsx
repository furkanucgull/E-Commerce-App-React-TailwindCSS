import { useSelector } from 'react-redux';
import Basket from '../pages/Basket';

function BasketList() {
  const products = useSelector(state => state.basket);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {products.length === 0 ? (
        <p>Cart is emtpy</p>
      ) : (
        <div>
          {products.map(product => (
            <Basket key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BasketList;
