import React from 'react';
import Layout from '@/components/Layout';
import '@/app/globals.css';
import CartDetail from '@/components/CartDetail';

/**
 * The CartPage component wraps the CartDetail in the Layout.
 */
const CartPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <CartDetail />
    </Layout>
  );
};

export default CartPage;
