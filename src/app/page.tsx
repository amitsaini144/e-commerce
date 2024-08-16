"use client"
import { useState } from "react";
import ProductCard from "../components/productCard";

interface Product {
  name: string;
  imageSrc: string;
  price: string;
}

const productImage : Product[] = [
  { name: "iPhone 14 Pro Max", imageSrc: "/images/mobile.jpg", price: "1,19,999" },
  { name: "Moto G85 Plus", imageSrc: "/images/mobile.jpg", price: "17,999" },
  { name: "Samsung Galaxy S22", imageSrc: "/images/SamsungS23Ultra.jpeg", price: "49,999" },
  { name: "IQOO Neo 5", imageSrc: "/images/mobile.jpg", price: "32,999" },
  { name: "LAVA G7", imageSrc: "/images/mobile.jpg", price: "12,999" },
  { name: "Xiaomi Mi 11", imageSrc: "/images/mobile.jpg", price: "47,999" },
  { name: "Xiaomi Mi 11", imageSrc: "/images/mobile.jpg", price: "47,999" },
  { name: "Xiaomi Mi 11", imageSrc: "/images/mobile.jpg", price: "47,999" },
  { name: "Xiaomi Mi 11", imageSrc: "/images/mobile.jpg", price: "47,999" },

]

export default function Home() {


  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {productImage.map((product, index) => (
          <ProductCard key={index} {...product}  />
        ))}
      </div>
    </div>
  );
}
