
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartAmount,setCartAmount] = useState(0)

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
        setCartAmount,
        cartAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
