// pages/404.tsx
import Layout from '@/components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">404: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </Layout>
  );
};

export default NotFoundPage;