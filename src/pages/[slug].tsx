import NotFoundPage from './404';
import ProductDetailPage from './products/[id]';

interface PageProps {
  slug: string;
}

const Page = ({ slug }: PageProps) => {
  if (slug.startsWith('products/')) {
    const productId = slug.split('/')[1];
    return <ProductDetailPage productId={productId} />;
  }

  return <NotFoundPage />;
};

export default Page;