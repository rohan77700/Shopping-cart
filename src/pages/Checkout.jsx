import { useCart } from '../context/CartUtils';

export default function Checkout() {
  const { cart, removeFromCart, updateCartItem } = useCart();
  const cartItems = Object.values(cart);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartItem(productId, newQuantity);
  };

  return (
    <div className="checkout container">
      <h1 className='checkout-heading'>Checkout</h1>
      {cartItems.length === 0 ? (
        <p className='cart-empty'>Your cart is empty.</p>
      ) : (
        <div className="checkout-grid">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className="checkout-card">
              <img src={product.image} alt={product.title} width={100} />
              <h3>{product.title}</h3>
              <br />
              <p>Price: ${product.price.toFixed(2)}</p>
              <br />
              <div className="checkout-quantity-controls">
                <button onClick={() => handleQuantityChange(product.id, quantity - 1)}>-</button>
                <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value) || 1)
                    }
                />
                <button onClick={() => handleQuantityChange(product.id, quantity + 1)}>+</button>
              </div>
              <br />
              <p>Price: ${(product.price * quantity).toFixed(2)}</p>
              <br />
              <button className="add-to-cart-btn" onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}