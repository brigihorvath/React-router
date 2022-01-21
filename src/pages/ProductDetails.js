import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

const ProductDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductDetails;
