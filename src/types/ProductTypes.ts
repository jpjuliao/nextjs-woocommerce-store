export interface Product {
  id: number;
  name: string;
  price: number;
  description: string; 
  images: Array<{
    [x: string]: string; src: string 
}>;
  permalink: string;
  quantity: number;
}

export interface ProductsType {
  products: Product[];
}

export interface ProductDetailType {
  product: Product;
}