import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { Product } from '@/types/product';
import { fetchProducts } from '@/utils/api';

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await fetchProducts();
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
};

export default ProductsPage;