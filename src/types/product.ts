export interface Product {
  id: number;
  name: string;
  price: string;
  images: Array<{ src: string }>;
  permalink: string;
}