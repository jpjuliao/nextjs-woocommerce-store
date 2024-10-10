import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ProductDetailType } from '@/types/ProductTypes';
import Image from 'next/image';

/**
 * A card component that displays product information and allows users to add it to their cart.
 *
 * @param {Object} props - React props.
 * @param {Product} props.product - A product object.
 *
 * @returns {React.ReactElement} A React component.
 */
const ProductCard: React.FC<ProductDetailType> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      {
        product.images.length > 0 ? (
          <><Image src={product.images[0].src} width={400} height={300} alt={product.name}
            className="w-full h-48 object-cover mb-4" /></>
        ) : (
          <img src="https://placehold.co/600x400" width={400} height={300} alt={product.name} />
        )
      }
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">${product.price}</p>

      <div className="mb-4">
        <label className="mr-2"><div>Quantity:</div>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 p-1 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="flex justify-between">
        <a href={`/products/${product.id}`} rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </a>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
