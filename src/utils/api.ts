import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
});

/**
 * Fetches the list of products from the API.
 *
 * @returns {Promise<Array<Product>>} Promise resolving to the list of products.
 */
export async function fetchProducts() {
  try {
    const response = await axiosInstance.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}


/**
 * Fetches a product by its slug from the API.
 *
 * @param {string} ID - The ID of the product to fetch.
 * @returns {Promise<Product | null>} Promise resolving to the product if found,
 *     or null if not found.
 */
export async function fetchProductByID(id: number) {
  try {
    const response = await axiosInstance.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with slug ${id}:`, error);
    return null;
  }
}
