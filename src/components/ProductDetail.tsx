import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import ProductDetailProps from '@/types/ProductDetailProps';

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  console.log(product);

  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();
  const [sanitizedDescription, setSanitizedDescription] = useState(product.description);

  useEffect(() => {
    const sanitizeContent = async () => {
      if (typeof window !== 'undefined') {
        const DOMPurify = (await import('dompurify')).default;
        setSanitizedDescription(DOMPurify.sanitize(product.description));
      }
    };
    sanitizeContent();
  }, [product.description]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    });
  };

  return (
    <div className="product-detail">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg font-semibold mb-2">${product.price}</p>

      <div className="product-gallery">
        {product.images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="mb-4"
          />
        ))}
      </div>

      <div className="product-description">
        <h2 className="text-2xl font-bold mt-4">Description</h2>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </div>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        min="1"
        className="w-16 p-1 border border-gray-300 rounded"
      />

      <button
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add {quantity} to Cart
      </button>
    </div>
  );
};

export default ProductDetail;