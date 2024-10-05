// lib/api.ts
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
