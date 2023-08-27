import React, { useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';

function Cart() {
  const { cartState, dispatch } = useCart();

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      dispatch({ type: 'SET_ITEMS', payload: JSON.parse(savedCartItems) });
    }
  }, [dispatch]);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^\d.,-]/g, '').replace(',', '.'));
  };

  const calculateTotalBill = () => {
    return cartState.items.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartState.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartState.items.map((item, index) => (
              <li key={index}>
                <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100px' }} />
                <h3>{item.title}</h3>
                <p>Price For Each: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                {/* You can add buttons here to edit or remove items */}
              </li>
            ))}
          </ul>
          <p>Total Bill: {calculateTotalBill().toFixed(2)}€</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
