import { useState } from 'react';
import { useCart } from '../context/CartUtils';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>

      <div className="quantity-controls">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
        />
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <button className="add-to-cart-btn" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}