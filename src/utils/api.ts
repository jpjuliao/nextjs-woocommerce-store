import axios from 'axios';
import { Product } from '@/types/product';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await axios.get(`/api/products/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
}