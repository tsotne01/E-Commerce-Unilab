import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Details {id}</h1>
      <p>View detailed information about the selected product.</p>
    </div>
  );
};

export default ProductDetailsPage;
