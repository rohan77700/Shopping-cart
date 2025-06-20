import React, { useState } from 'react';
import { CartContext } from './CartUtils';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + quantity : quantity,
        },
      };
    });
  };

  const updateCartItem = (id, newQuantity) => {
    setCart(prev => ({
        ...prev,
        [id]: {
        ...prev[id],
        quantity: newQuantity,
        },
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};