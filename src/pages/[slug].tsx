import NotFoundPage from './404';

interface PageProps {
  slug: string;
}

const Page = ({ slug }: PageProps) => {
  return <NotFoundPage />;
};

export default Page;