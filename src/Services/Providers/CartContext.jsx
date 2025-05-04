import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {

    setCartItems((prev) => {
      return [...prev,item];
    });

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const setNumberOfItems = (itemId, newItemNum) => {
    // setCartItems((prev) => {
    //   console.log(prev.filter((item) => item.id === itemId));
    //   console.log(newItemNum);
    //   // return [...prev,prev.filter((item) => item.id === itemId)];
    // });
    console.log(itemId, newItemNum)
    console.log(cartItems);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, setNumberOfItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
