"use client"
import ProductCard from "../components/productCard";
import { Toaster, toast } from 'sonner'
interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
}

const productImage: Product[] = [
  { id: 1, name: "Apple Watch Series 9", imageSrc: "/images/smartwatch.png", price: "39,500" },
  { id: 2, name: "Iphone 6", imageSrc: "/images/iphone.png", price: "47,999" },
  { id: 3, name: "Mi Smart Band", imageSrc: "/images/fitbit.png", price: "1,899" },
  { id: 4, name: "Chair", imageSrc: "/images/chair.png", price: "47,999" },
  { id: 5, name: "Nike Sport shoes (Red)", imageSrc: "/images/shoes.png", price: "47,999" },
  { id: 6, name: "Moto G85 Plus", imageSrc: "/images/mobile.jpg", price: "17,999" },
  { id: 7, name: "Samsung Galaxy S22 (8GB, 128GB)", imageSrc: "/images/SamsungS23Ultra.jpeg", price: "49,999" },
  { id: 8, name: "boAt Airdopes 71 w/ 40 HRS Playback, ENx Technology & Beast Mode(Low Latency) Bluetooth Headset  (Active Black, True Wireless)", imageSrc: "/images/boat-earphone.png", price: "899" },
  { id: 9, name: "ZEBRONICS PSPK9 (County) Bluetooth Speaker with Built-in FM Radio ,Aux input 3 W Bluetooth Speaker  (Green, Mono Channel)", imageSrc: "/images/zebronics-speaker.png", price: "599" },
]


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
