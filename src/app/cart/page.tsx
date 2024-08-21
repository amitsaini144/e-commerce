"use client"

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartProductCard";
import PriceDetails from "@/components/priceDetails";
import Image from "next/image";
import { Toaster } from 'sonner'
import Link from "next/link";

export default function Cart() {
  const { cart, getTotalPrice, proceedToCheckout } = useCart();
  const { total, discount, savings, totalPriceBeforeDiscount } = getTotalPrice();

  return (
    <div className="mx-auto px-4 py-8 bg-[#f1f3f6] min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="bg-white rounded-md shadow-md p-6 h-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-64 h-64">
                <Image
                  src='/images/emptycart.png'
                  alt="Empty Cart Image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</p>
              <p className="text-gray-600 mb-8">Add items to it now</p>

              <Link href="/">
                <button className="bg-[#2874f0] text-white font-medium py-2 px-16 rounded-sm transition-colors duration-300">
                  Shop now
                </button>
              </Link>

            </div>
          ) : (
            <div className="lg:flex lg:space-x-6">
              <div className="lg:w-2/3 lg:pr-6 mb-6 lg:mb-0">
                <div className="bg-white rounded-md shadow-md p-4">
                  {cart.map((item, index) => (
                    <CartItem key={index} {...item} />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <PriceDetails
                    total={total}
                    discount={discount}
                    savings={savings}
                    totalPriceBeforeDiscount={totalPriceBeforeDiscount} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <button
                    onClick={proceedToCheckout}
                    className=" w-full bg-[#fb641b] text-white font-medium py-3 px-4 rounded-sm transition-colors duration-300">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
