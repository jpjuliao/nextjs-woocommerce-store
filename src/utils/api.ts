import axios from 'axios';

// Set the base URL for axios requests
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
});

export async function fetchProducts() {
  try {
    const response = await axiosInstance.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug: string) {
  try {
    const response = await axiosInstance.get(`/api/products/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
}
