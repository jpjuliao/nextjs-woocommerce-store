'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Use the new useParams hook
import Layout from '@/components/Layout';
import { fetchProductBySlug } from '@/utils/api';
import { Product } from '@/types/product';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import DOMPurify from 'dompurify'; 

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const params = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      if (params.slug) {
        try {
          const fetchedProduct = await fetchProductBySlug(params.slug as string);
          if (fetchedProduct) {
            setProduct(fetchedProduct);
          } else {
            setError('Product not found');
          }
        } catch (err) {
          setError('Failed to fetch product');
        } finally {
          setLoading(false);
        }
      }
    };

    loadProduct();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const sanitizedDescription = DOMPurify.sanitize(product.description);

  return (
    <Layout>
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

        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
