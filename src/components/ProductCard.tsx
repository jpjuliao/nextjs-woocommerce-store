import React from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.images[0].src} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <div className="flex justify-between">
        <a href={product.permalink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </a>
        <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;