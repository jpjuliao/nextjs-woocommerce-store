'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * The CartProvider component wraps the component tree in a context provider for
 * the cart state. The cart state is stored in the component's state and is
 * exposed to the component tree via the useCart hook.
 *
 * The CartProvider component also provides two functions to the component tree:
 * addToCart and removeFromCart. These functions are used to update the cart
 * state.
 *
 * @example
 * import { CartProvider } from '@/contexts/CartContext';
 *
 * export default function App() {
 *   return (
 *     <CartProvider>
 *       <YourApp />
 *     </CartProvider>
 *   );
 * }
 */
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  /**
   * Removes a product from the cart by its ID.
   * @param {number} productId - The ID of the product to remove.
   */
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

/**
 * Hook to access the cart context.
 *
 * The `useCart` hook returns an object with the following properties:
 *
 * * `cart`: The current cart items.
 * * `addToCart`: A function to add a product to the cart.
 * * `removeFromCart`: A function to remove a product from the cart by its ID.
 *
 * This hook must be used within a `CartProvider` component.
 *
 * @returns {Object} The cart context.
 *
 * @throws {Error} If the hook is not used within a `CartProvider`.
 */
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Default export combining both the CartProvider and the useCart hook
export { CartProvider, useCart };
