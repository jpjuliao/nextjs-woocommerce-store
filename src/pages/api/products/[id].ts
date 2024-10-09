import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchProductByID } from '@/utils/api';

/**
 * Handles GET requests to fetch a product by its id from the WooCommerce API.
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
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid id' });
  }

  try {
    const product = await fetchProductByID(Number(id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
}