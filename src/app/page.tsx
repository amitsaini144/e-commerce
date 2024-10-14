"use client"
import ProductCard from "../components/productCard";
import { Toaster, toast } from 'sonner'
import { productImage } from "../data";

export default function Home() {
  return (
    <div className="bg-[#f1f3f6] w-full min-h-screen">
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
          {productImage.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <Toaster />
      </div>
    </div>

  );
}
