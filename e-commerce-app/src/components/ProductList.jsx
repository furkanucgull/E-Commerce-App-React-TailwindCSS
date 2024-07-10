import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/ProductSlice';
import Product from '../pages/Product';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.product);
  //console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
