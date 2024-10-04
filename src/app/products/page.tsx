import React from 'react';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { Product } from '@/types/product';
import { fetchProducts } from '@/utils/api';

async function getProducts(): Promise<Product[]> {
  return fetchProducts();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </Layout>
  );
}