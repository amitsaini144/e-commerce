import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Product } from "../types";

export default function CartItem({ id, name, imageSrc, price, quantity }: Product) {
    const { updateQuantity, removeFromCart } = useCart();

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1 && newQuantity <= 10) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <div className="flex items-center border-b border-gray-200 py-4 ">
            <div className="w-24 h-24 mr-4 relative overflow-hidden rounded-md bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-grow min-w-0">
                <h3 className="md:text-lg font-semibold text-gray-800 hover:text-[#2874f0] truncate">{name}</h3>
                <p className="text-[12px] md:text-sm text-gray-800 mb-2">₹{price}</p>
                <div className="flex items-center">
                    <button
                        onClick={() => handleQuantityChange(quantity! - 1)}
                        className={`text-2xl ${quantity! <= 1 ? 'text-gray-400' : 'text-black'}`}
                        disabled={quantity! <= 1}
                    >
                        <CiSquareMinus />
                    </button>
                    <span className="mx-2 text-gray-700">{quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(quantity! + 1)}
                        className={`text-2xl ${quantity! >= 10 ? 'text-gray-400' : 'text-black'}`}
                        disabled={quantity! >= 10}
                    >
                        <CiSquarePlus />
                    </button>
                </div>
            </div>
            <div className="flex-shrink-0 ml-4 text-right flex flex-col gap-7">
                <p className="md:text-lg font-bold text-gray-800">₹{(parseFloat(price.replace(/₹|,/g, '')) * quantity!).toLocaleString('en-IN')}</p>
                <button
                    onClick={() => removeFromCart(id)}
                    className="text-sm"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}