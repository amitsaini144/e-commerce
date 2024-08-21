"use client"
import ProductCard from "../components/productCard";
import { Toaster, toast } from 'sonner'
import { productImage } from "../data";

export default function Home() {

  return (
    <div className="bg-[#f1f3f6]">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          {productImage.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
