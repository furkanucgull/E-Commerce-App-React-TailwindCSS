import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/ProductSlice';
import Product from '../pages/Product';

function ProductList() {
  const dispatch = useDispatch();
  const { products, searchTerm } = useSelector(store => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
