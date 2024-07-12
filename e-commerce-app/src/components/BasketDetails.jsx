import { useSelector } from 'react-redux';
import Basket from '../pages/Basket';

function BasketDetails() {
  const products = useSelector(state => state.basket.products);

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

  return (
    <div className="main flex flex-col lg:flex-row gap-6 p-4 h-full">
      <div className="product-area ">
        <div className="bg-stone-100 rounded-lg p-6 shadow-md w-96 h-full text-black">
          <div className="mt-6 text-2xl font-bold bg-stone-100 rounded-lg  ">
            <h2 className="m-5 mb-16">Shopping Cart ({products.length})</h2>
          </div>

          {products.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="flex flex-col mt-4 gap-6">
              {products.map(product => (
                <Basket key={product.id} product={product} />
              ))}
              {/* <p className="text-lg font-semibold mt-4">Total: {totalAmount} $</p> */}
            </div>
          )}
        </div>
      </div>
      <div className="summary-area flex flex-col items-center text-black">
        <div className="bg-neutral-100 w-96 p-6">
          <h2 className="text-xl sm:text-3xl mb-6">Summary</h2>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between w-full border-b-2  border-gray-300 pb-2">
              <p>Shipping Fee :</p>
              <span>0 $</span>
            </div>
            <div className="flex justify-between w-full font-bold border-b-2  border-gray-300 pb-2">
              <p>Total :</p>
              <span>{totalAmount.toFixed(2)} $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketDetails;
