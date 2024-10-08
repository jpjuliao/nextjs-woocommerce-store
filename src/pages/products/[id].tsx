
import { GetStaticProps, GetStaticPaths } from 'next';
import { fetchProductByID, fetchProducts } from '@/utils/api';
import ProductDetail from '@/components/ProductDetail';
import { Product } from '@/types/product';
import Layout from '@/components/Layout';
import "@/app/globals.css";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return  (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
};

export default ProductDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return { notFound: true };
  }
  
  const productId = Number(params.id);
  const product = await fetchProductByID(productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 60, // Regenerate the page at most every 60 seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};