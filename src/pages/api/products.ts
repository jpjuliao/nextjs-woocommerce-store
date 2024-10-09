import type { NextApiRequest, NextApiResponse } from 'next';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Product } from '@/types/Product';

const WooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || '',
  consumerKey: process.env.WOOCOMMERCE_KEY || '',
  consumerSecret: process.env.WOOCOMMERCE_SECRET || '',
  version: 'wc/v3'
});

/**
 * Handles GET requests to fetch the list of products from the WooCommerce API.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 *
 * @returns {Promise<void>} Promise resolving when the response is sent.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const response = await WooCommerce.get('products');
      const products: Product[] = response.data;
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
