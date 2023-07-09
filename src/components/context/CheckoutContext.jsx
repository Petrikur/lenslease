import React, { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkoutData, setCheckoutData] = useState({});

  const updateCheckoutData = (data) => {
    setCheckoutData(data);
  };

  return (
    <CheckoutContext.Provider value={{ checkoutData, updateCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
};
