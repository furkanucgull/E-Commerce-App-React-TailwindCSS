/* eslint-disable react/prop-types */
// pages/Basket.jsx

function Basket({ product }) {
  if (!product) {
    return <div>Ürün bilgisi bulunamadı</div>;
  }

  const { description, image, price, title, count } = product;

  return (
    <div>
      <p>Ürün Adı: {title}</p>
      <p>Adet: {count}</p>
      <p>desc: {description}</p>
      <p>price : {price}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default Basket;
