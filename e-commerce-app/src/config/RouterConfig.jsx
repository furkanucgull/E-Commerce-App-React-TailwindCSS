import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../components/ProductDetails';

import BasketDetails from '../components/BasketDetails';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/basket-details/" element={<BasketDetails />} />
    </Routes>
  );
}

export default RouterConfig;
