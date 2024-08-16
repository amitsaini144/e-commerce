
"use client"
import ProductCard from "@/components/productCard";
import { useCart } from "@/context/CartContext";

export default function card() {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {cart.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>

  );
}
