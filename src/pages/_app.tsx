import React from 'react';
import { AppProps } from 'next/app';
import { CartProvider } from '@/contexts/CartContext';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;