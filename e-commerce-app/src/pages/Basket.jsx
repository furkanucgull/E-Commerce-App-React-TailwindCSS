/* eslint-disable react/prop-types */
// pages/Basket.jsx
import { CiTrash } from 'react-icons/ci';

function Basket({ product }) {
  if (!product) {
    return <div>Ürün bilgisi bulunamadı</div>;
  }

  const { description, image, price, title, count } = product;

  return (
    <div className="main  gap-6">
      <div className="product-area  ">
        <div className="bg-stone-100 w-6/12  ">
          <div className="image flex flex-row ">
            <img className="object-contain w-24 h-24 " src={image} alt="" />
            <div className="flex flex-col w-96">
              <p className="text-lg mt-auto mb-auto font-serif"> {title.substring(0, 20)}</p>
              <p className="text-sm mt-auto mb-auto font-serif"> {description.substring(0, 40)}...</p>
              <p className="mb-6 font-semibold"> {price} $ </p>
            </div>
            <div className="ml-3 flex flex-col justify-center gap-3 ">
              <p className="text-sm  "> Count : {count}</p>
              <div className="text-xl ml-4 text-red-600 cursor-pointer hover:scale-110">
                <CiTrash />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
