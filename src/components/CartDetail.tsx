'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';

/**
 * The CartDetail component displays the cart items and the total price.
 *
 * If the cart is empty, it displays a message saying so.
 *
 * Otherwise, it displays a list of cart items, each with its name, quantity,
 * price, and a button to remove it from the cart. It also displays a summary
 * with the total price and a button to proceed to checkout.
 */
const CartDetail: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item flex justify-between mb-4 p-4 border-b">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button
                className="mt-2 text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
            </div>
            <div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary mt-8">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
