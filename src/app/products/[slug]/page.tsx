import ProductDetail from '@/components/ProductDetail';
import { CartProvider } from '@/contexts/CartContext';
import Layout from '@/components/Layout';

export default function ProductDetailPage() {
  return <Layout>
    <ProductDetail />
  </Layout>;
}
