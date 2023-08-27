import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = { items: [] };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        // Check if the item already exists in the cart
        const existingItem = state.items.find(item => item.title === action.payload.title);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.title === action.payload.title ? { ...item, quantity: item.quantity + action.payload.quantity } : item
            ),
          };
        } else {
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
      case "CLEAR_CART":
        return { items: [] };

      case "SET_ITEMS":
        return { items: action.payload };
      default:
        return state;
    }
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Fetch cart data from local storage when the app starts
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      dispatch({ type: 'SET_ITEMS', payload: JSON.parse(savedCartItems) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
