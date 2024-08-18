"use client"
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    let cartItemCount = cart.length;
    return (
        <nav className="sticky top-0 left-0 right-0 z-50 shadow-sm backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href='/' className="flex items-center">
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
                            E-commerce
                        </span>
                    </Link>
                    <Link href="/cart" className="flex items-center relative">
                        <span className="flex justify-center items-center font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-300">
                            <FiShoppingCart className="mr-2 h-6 w-6" />
                            Cart
                        </span>
                        {cartItemCount > 0 && (
                            <div className="absolute bottom-3 right-8 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                {cartItemCount}
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    )
}