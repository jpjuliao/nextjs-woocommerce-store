import { GetStaticProps, GetStaticPaths } from 'next';
import { useState } from 'react';
import { fetchProductByID } from '@/utils/api'; // Assuming this utility exists to fetch product data
import { Product } from '@/types/product';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import DOMPurify from 'dompurify';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const sanitizedDescription = DOMPurify.sanitize(product.description);

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

// getStaticProps to fetch product data based on the dynamic ID
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  
  const productId = params.id;
  console.log('Params:', params); // Add this line to verify the id parameter
  console.log('ProductId:', productId); // Add this line to verify the id parameter
  
  const product = await fetchProductByID(Number(productId));

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60, // Regenerate the page at most every 60 seconds
  };
};

// getStaticPaths to pre-render product pages based on dynamic IDs
export const getStaticPaths: GetStaticPaths = async () => {
  // Here you'd typically fetch all product IDs from an API or database
  const products = await fetchProducts(); // Assuming fetchProducts exists
  const paths = products.map((product) => ({
    params: { id: product.id.toString() }, // Ensure id is a string
  }));

  return {
    paths,
    fallback: 'blocking', // Block rendering until the page is generated
  };
};
