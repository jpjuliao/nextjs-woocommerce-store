import { fetchProductByID } from '@/utils/api';
import Layout from '@/components/Layout';
import ProductDetail from '@/components/ProductDetail';

export default function ProductDetailPage({ product }) {
  if (!product) {
    return <Layout>
      <div>Product not found</div>;
    </Layout>;
  }

  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const productId = params.id;
  const product = await fetchProductByID(productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};