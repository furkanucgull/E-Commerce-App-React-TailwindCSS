/* eslint-disable react/prop-types */
// pages/Basket.jsx
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/slices/BasketSlice';
import { CiTrash } from 'react-icons/ci';

function Basket({ product }) {
  const dispatch = useDispatch();

  const handleRemoveFromBasket = productId => {
    dispatch(removeFromBasket({ id: productId }));
  };
  if (!product) {
    return <div>Product not found!</div>;
  }

  var { description, image, price, title, count } = product;

  return (
    <div>
      <div className="main flex flex-row gap-10 items-center border-b-2 border-black">
        <div className="image-container flex items-center   w-12 h-12 sm:w-32 sm:h-32 mr-6 ">
          <img className="object-cover  " src={image} alt="" />
        </div>
        <div className="info-container flex flex-col border-2 px-4 py-2 rounded-lg mb-3 border-slate-900">
          <p className="text-lg mt-auto mb-auto font-serif"> {title.substring(0, 20)}</p>
          <p className="text-sm mt-auto mb-auto font-serif"> {description.substring(0, 40)}...</p>
          <p className="text-sm mt-1 p-0 font-light "> Count : {count}</p>
          <div className="text-xl ml-4 mt-1 text-red-600 cursor-pointer hover:scale-110">
            <CiTrash onClick={() => handleRemoveFromBasket(product.id)} />
          </div>
          <p className="mt-3 font-semibold"> {price} $ </p>
        </div>
      </div>
    </div>
  );
}

export default Basket;
