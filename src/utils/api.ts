import { Product } from '@/types/product';

const WOO_COMMERCE_URL = process.env.NEXT_PUBLIC_WOO_COMMERCE_URL;
const WOO_COMMERCE_KEY = process.env.WOO_COMMERCE_KEY;
const WOO_COMMERCE_SECRET = process.env.WOO_COMMERCE_SECRET;

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${WOO_COMMERCE_URL}/wp-json/wc/v3/products`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${WOO_COMMERCE_KEY}:${WOO_COMMERCE_SECRET}`).toString('base64')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}