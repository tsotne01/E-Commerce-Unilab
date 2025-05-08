import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const includesItem = cartItems.find((itm) => itm.id === item.id);
    if (includesItem) {
      const newCartItems = cartItems.map((itm) => {
        if (itm.id === item.id) {
          itm.numberOfItems = item.numberOfItems;
        }
        return itm;
      });
      setCartItems(() => {
        return newCartItems;
      });
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const setNumberOfItems = (itemId, newItemNum) => {
    const newItems = cartItems.map((item) => {
      if (item.id === itemId) {
        item.numberOfItems = newItemNum;
      }
      return item;
    });
    setCartItems(() => newItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        setNumberOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
