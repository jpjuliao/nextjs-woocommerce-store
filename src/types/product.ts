export interface Product {
  id: number;
  name: string;
  price: string;
  description: string; 
  images: Array<{
    [x: string]: string; src: string 
}>;
  permalink: string;
  quantity: number;
}