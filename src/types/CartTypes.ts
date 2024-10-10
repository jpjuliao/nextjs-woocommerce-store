interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItemProps[];
  addToCart: (item: CartItemProps) => void;
  removeFromCart: (itemId: number) => void;
}

export type { CartItemProps, CartContextProps };