
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
  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  );
};

export default ProductDetailPage;

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Next.js' getStaticProps function, which is used to pre-render this page at
 * build time. This function is called at build time with the `params` object
 * as an argument. The `params` object has a single property, `id`, which is
 * the product ID.
 *
 * If `params.id` is not present, or if the product does not exist, this
 * function returns `{ notFound: true }`, which tells Next.js to return a 404
 * error.
 *
 * If the product exists, this function returns an object with a `props`
 * property, which is an object containing the product data. The
 * `revalidate` property is set to 60, which means that Next.js will
 * revalidate this page and re-run this function every 60 seconds.
 */
/******  e812ad66-dac0-4dd2-9266-18b50fc1895d  *******/
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
    revalidate: 60,
  };
};


/**
 * Next.js' getStaticPaths function, which is used to pre-render this page at
 * build time. This function is called at build time, and it returns an object
 * with a `paths` property, which is an array of objects with a `params`
 * property. The `params` property is an object with a single property, `id`,
 * which is the product ID.
 *
 * The `fallback` property is set to `'blocking'`, which means that Next.js
 * will block page loads for paths that are not included in the `paths` array
 * until the page has finished generating. This is useful for SEO, since it
 * ensures that search engines will see the page content even if it takes a
 * little while to generate.
 */
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