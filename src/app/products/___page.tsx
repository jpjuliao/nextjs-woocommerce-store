import React from 'react';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/utils/api'; // Using Axios-based utility
import { Product } from '@/types/product';

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </Layout>
  );
};

export async function getStaticProps() {
  let products: Product[] = [];
  try {
    // Fetch products from the internal API route at build time
    products = await fetchProducts();
  } catch (error) {
    console.error('Error fetching products in SSG:', error);
  }

  return {
    props: {
      products,
    },
    // ISR: Regenerate the page every 60 seconds, ensuring the data is fresh.
    revalidate: 60,
  };
}

export default ProductsPage;
