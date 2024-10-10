import React from 'react';
import { ProductsType } from '@/types/ProductTypes';
import ProductCard from '@/components/ProductCard';


/**
 * A component that displays a list of products in a grid.
 *
 * @param {ProductsType} props - The component props.
 * @param {Product[]} props.products - An array of products to display.
 *
 * @returns {React.ReactElement} A React element representing the product list.
 */
const ProductList: React.FC<ProductsType> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;