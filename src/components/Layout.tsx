import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold">My Store</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;