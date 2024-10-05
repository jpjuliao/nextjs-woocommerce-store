import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

/**
 * The homepage of the app, which displays a hero section with a link to the
 * products page and other content as needed.
 *
 * @returns The JSX element for the homepage.
 */
export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js
            </a>
            {' '}WooCommerce Store
          </h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Link href="/products">
              <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">View Products &rarr;</h3>
                <p className="mt-4 text-xl">
                  Explore our wide range of products from WooCommerce.
                </p>
              </div>
            </Link>

            {/* Add more links or content as needed */}
          </div>
        </main>
      </div>
    </Layout>
  );
}