import React from 'react';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/utils/api';
import { Product } from '@/types/ProductProps';
import "@/app/globals.css";
import ProductsProps from '@/types/ProductsProps';


/**
 * A page that displays a list of products.
 *
 * @param {Object} props - React props.
 * @param {Product[]} props.products - An array of products to display.
 *
 * @returns {React.ReactElement} A React component.
 */
const ProductsPage: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </Layout>
  );
};

/**
 * getStaticProps is called during Static Site Generation (SSG) by Next.js.
 * It fetches products from the WooCommerce store and returns them as props to the page.
 * The page is revalidated every 60 seconds, meaning Next.js will re-run this function and update the page if any changes are detected.
 */
export async function getStaticProps() {
  let products: Product[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error('Error fetching products in SSG:', error);
  } 

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

export default ProductsPage;
