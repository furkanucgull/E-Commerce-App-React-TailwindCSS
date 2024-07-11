import { useSelector } from 'react-redux';
import Basket from '../pages/Basket';

function BasketDetails() {
  const products = useSelector(state => state.basket.products);

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

  return (
    <div className="main flex flex-col lg:flex-row gap-6 p-4">
      <div className="product-area flex-1">
        <div className="bg-stone-100 rounded-lg p-6 shadow-md">
          <div className="mt-6 text-2xl font-bold bg-stone-100 rounded-lg w-6/12 h-24">
            <h2 className="m-5">Shopping Cart ({products.length})</h2>
          </div>

          {products.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="flex flex-col mt-4 gap-6">
              {products.map(product => (
                <Basket key={product.id} product={product} />
              ))}
              <p className="text-lg font-semibold mt-4">Total: {totalAmount} $</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketDetails;
