import { Link } from 'react-router-dom';
import { useCart } from '../context/CartUtils';
import { getTotalCartItems } from '../utils/cartHelpers';

export default function Navbar() {
  const { cart } = useCart();
  const total = getTotalCartItems(cart);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="nav-right">
        <Link to="/checkout">
          <button>Cart [{total}]</button>
        </Link>
      </div>
    </nav>
  );
}