"use client"
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
    id: number;
    name: string;
    imageSrc: string;
    price: string;
}

export default function ProductCard({ id, name, imageSrc, price }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white max-w-xs w-full rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
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
                <div className="flex flex-col gap-1 mb-4 text-sm">
                    <h3 className="font-semibold text-gray-800 truncate">{name}</h3>
                    <p className="font-bold text-blue-600">₹ {price}</p>
                </div>
                <button
                    onClick={() => addToCart(id, name, imageSrc, price)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}