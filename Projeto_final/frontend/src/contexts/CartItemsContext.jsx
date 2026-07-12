import { createContext, useState } from "react";

export const CartItemContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemContext.Provider>
  );
};
