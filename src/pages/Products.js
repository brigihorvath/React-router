import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Fragment>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Rock</Link>
        </li>
        <li>
          <Link to="/products/p2">Paper</Link>
        </li>
        <li>
          <Link to="/products/p3">Scissor</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
