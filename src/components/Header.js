import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>Header</h2>
      <nav>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
