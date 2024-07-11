import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/ProductSlice';
import { IoStarOutline } from 'react-icons/io5';
import { IoIosStar } from 'react-icons/io';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';
import { addToBasket } from '../redux/slices/BasketSlice';

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector(store => store.product);
  const { category, description, image, price, title, rating } = selectedProduct;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(c => c - 1);
    }
  };

  const dispatch = useDispatch();
  const addBasket = () => {
    const payload = {
      id,
      title,
      price,
      image,
      description,
      count,
    };
    dispatch(addToBasket(payload));
  };
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map(product => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="mt-16 flex flex-col md:flex-row gap-5 ">
      <div className="product-img flex justify-center md:justify-start">
        <img
          className="border-2 rounded-xl border-gray-200 min-w-48 min-h-48 md:w-80 md:h-80 object-contain p-6"
          src={image}
          alt={title}
        />
      </div>
      <div className="title-desc ">
        <h2 className="text-lg md:text-2xl font-medium">{title}</h2>
        <div className="flex flex-row mt-6 items-center">
          <p className="pr-4 text-lg font-sans">Rating :</p>
          <IoIosStar />
          <IoIosStar />
          <IoStarOutline />
          <IoStarOutline />
          {/* <p className="text-lg ml-5 font-serif">{rating.rate}</p> */}
        </div>
        <div className="price text-lg ">
          {price} <span className="font-bold italic">$</span>{' '}
        </div>
        <p className="mt-5 text-sm md:text-base">{description}</p>{' '}
        <div className="cart-section  flex flex-row items-center">
          <div className="flex flex-row gap-5 items-center mt-2 text-2xl  w-36 h-16 justify-center">
            <CiCircleMinus onClick={decrement} className="cursor-pointer hover:scale-110 " /> <span>{count}</span>{' '}
            <CiCirclePlus onClick={increment} className="cursor-pointer hover:scale-110 " />
          </div>
          <div className="flex flex-row items-center font-mono gap-4 border-2 p-4 cursor-pointer bg-yellow-500 rounded-full text-center hover:shadow-xl hover:">
            <button onClick={addBasket}>Add To Cart</button>
            <MdAddShoppingCart className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
