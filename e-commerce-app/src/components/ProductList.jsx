import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/ProductSlice';
import Product from '../pages/Product';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.product);
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="flex flex-row  items-center justify-center flex-wrap gap-6 ">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
