'use client'; 

import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

  /**
   * The root layout for all pages.
   *
   * This component is rendered on the server and on the client.
   * It is the top-level component for all pages and is used to render the
   * highest-level HTML structure, including the {@link CartProvider} context.
   *
   * @param {{ children: ReactNode }} props The props object containing the
   * children to render.
   *
   * @returns {ReactElement} The root layout element.
   */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  /**
   * The root layout for all pages.
   *
   * This component is rendered on the server and on the client.
   * It is the top-level component for all pages and is used to render the
   * highest-level HTML structure, including the {@link CartProvider} context.
   *
   * @param {{ children: ReactNode }} props The props object containing the
   * children to render.
   *
   * @returns {ReactElement} The root layout element.
   */
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
