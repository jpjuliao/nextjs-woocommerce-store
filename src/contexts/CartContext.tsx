'use client';

import { CartItem, CartContextType } from '@/types/CartContextProps';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';


const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * A context provider for the cart state and functions to manipulate it.
 *
 * The provider stores the cart items in local storage, and loads the cart
 * from local storage when it mounts. It also saves the cart to local
 * storage whenever the cart changes.
 *
 * @param {Object} props - The props object must contain a single property,
 * `children`, which is the React node to render.
 * @returns {ReactElement} The CartContext provider, which wraps the given
 * children in the CartContext.Provider component.
 */
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * Adds an item to the cart. If the item is already in the cart,
   * it will increment the quantity of that item. Otherwise, it will
   * add the item to the cart.
   * @param {CartItem} item - The item to add to the cart.
   */
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: item.quantity }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

/**
 * A hook to access the cart state and functions to manipulate it.
 *
 * @returns {CartContextType} The cart state and functions to manipulate it.
 *
 * @throws {Error} If the hook is used outside of a CartProvider.
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
