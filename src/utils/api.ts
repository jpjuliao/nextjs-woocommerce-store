import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Product } from '@/types/product';

const WooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || '',
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY || '',
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET || '',
  version: 'wc/v3'
});

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await WooCommerce.get("products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Add other API functions as needed, e.g.:
// export async function fetchProduct(id: number): Promise<Product | null> { ... }
// export async function createOrder(orderData: OrderData): Promise<Order> { ... }