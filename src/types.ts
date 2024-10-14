import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  imageSrc: StaticImageData
  price: string;
  quantity?: number;
  rating?: number;
}

export interface PriceDetailsProps {
  total: number;
  discount: number;
  savings: number;
  totalPriceBeforeDiscount: number;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (id: number, name: string, imageSrc: StaticImageData, price: string) => void;
  getTotalPrice: () => { total: number, discount: number, savings: number, totalPriceBeforeDiscount: number };
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
  proceedToCheckout: () => void;
};