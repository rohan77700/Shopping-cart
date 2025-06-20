export const getTotalCartItems = (cart) => {
  return Object.values(cart).reduce((total, entry) => total + entry.quantity, 0);
};