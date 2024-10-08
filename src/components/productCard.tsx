"use client"

import Image from "next/image";
import { TiStar } from "react-icons/ti";
import { useCart } from "../context/CartContext";
import { Product } from "../types";

export default function ProductCard({ id, name, imageSrc, price, rating }: Product) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white max-w-md w-full rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
            <div className="p-4">
                <div className="aspect-square w-full mb-4 flex bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt="product"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full rounded-lg"
                        layout="responsive"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <h3 className="font-semibold truncate text-base group-hover:text-[#2874f0]">{name}</h3>
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-semibold text-gray-800">₹{price}</p>
                        <div className="flex items-center justify-center bg-[#388e3c] text-white rounded pl-2 pr-1 text-sm">
                            <span>{rating}</span>
                            <TiStar className="text-white w-4" />
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => addToCart(id, name, imageSrc, price)}
                    className="w-full bg-[#2874f0] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}