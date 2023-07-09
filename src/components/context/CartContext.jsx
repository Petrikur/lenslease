
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

 const removeFromCart = (itemId) => {
  const indexToRemove = cartItems.findIndex((item) => item.id === itemId);

  if (indexToRemove !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(indexToRemove, 1);
    setCartItems(updatedCartItems);
  }
};

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
