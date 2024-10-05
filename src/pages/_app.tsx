import { AppProps } from 'next/app';
import { CartProvider } from '@/contexts/CartContext';

/**
 * The top-level component for the app, which wraps each page in the
 * `CartProvider` context.
 *
 * This component is special because Next.js will automatically pass the
 * `Component` and `pageProps` props to it, which allows us to wrap the page
 * component with the `CartProvider` without having to manually wrap each
 * page component.
 *
 * @param Component The page component to render
 * @param pageProps The props passed to the page component
 * @returns The page component wrapped in the `CartProvider`
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
