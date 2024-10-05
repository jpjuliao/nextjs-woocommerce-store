import type { NextApiRequest, NextApiResponse } from 'next';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Product } from '@/types/product';

const WooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || '',
  consumerKey: process.env.WOOCOMMERCE_KEY || '',
  consumerSecret: process.env.WOOCOMMERCE_SECRET || '',
  version: 'wc/v3'
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ message: 'Invalid slug' });
  }

  try {
    const response = await WooCommerce.get('products', {
      slug,
    });
    const products: Product[] = response.data;

    if (products.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const product = products[0];
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
}
