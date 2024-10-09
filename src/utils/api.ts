import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || '',
  consumerKey: process.env.WOOCOMMERCE_KEY || '',
  consumerSecret: process.env.WOOCOMMERCE_SECRET || '',
  version: 'wc/v3'
});

/**
 * Fetches the list of products from the WooCommerce API.
 *
 * @returns {Promise<Product[]>} Promise resolving to the list of products.
 */
export async function fetchProducts() {
  try {
    const response = await WooCommerce.get('products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetches a product by its id from the WooCommerce API.
 *
 * @param {number} id - The ID of the product to fetch.
 * @returns {Promise<Product | null>} Promise resolving to the product if found, or null if not found.
 */
export async function fetchProductByID(id: number) {
  try {
    const response = await WooCommerce.get(`products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}