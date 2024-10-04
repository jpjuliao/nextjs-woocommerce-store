'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/utils/api';
import { Product } from '@/types/product';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsPage;
