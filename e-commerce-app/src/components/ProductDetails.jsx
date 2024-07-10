import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <div>details {id}</div>
    </div>
  );
}

export default ProductDetails;
