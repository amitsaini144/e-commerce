"use client"
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'sonner'
import { Product, PriceDetailsProps, CartContextType } from "../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(id: number, name: string, imageSrc: string, price: string) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity! >= 10) {
                    toast.error('Maximum quantity reached');
                    return prevCart;
                }
                toast.success('Added to Cart');

                return prevCart.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity! + 1 }
                        : item
                );
            } else {
                toast.success('Added to Cart');
                return [...prevCart, { id, name, imageSrc, price, quantity: 1 }];
            }
        });
    }

    function getTotalPrice(): PriceDetailsProps {
        const discountRate = 0.1;
        const shipping = 129;

        const totalPriceBeforeDiscount = cart.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.replace(/₹|,/g, ''));
            return total + itemPrice * item.quantity!;
        }, 0);

        const discount = Math.round(totalPriceBeforeDiscount * discountRate);
        const total = Math.round(totalPriceBeforeDiscount - discount + shipping);
        const savings = Math.round(totalPriceBeforeDiscount - total);

        return { total, discount, savings, totalPriceBeforeDiscount };
    }

    function updateQuantity(id: number, newQuantity: number) {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    }

    function removeFromCart(id: number) {
        setCart(prevCart => {
            toast.success('Removed from Cart')
            return prevCart.filter(item => item.id !== id);
        });
    }

    function proceedToCheckout() {
        setCart([]);
        toast.success('Checkout Successful');
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalPrice, updateQuantity, removeFromCart, proceedToCheckout }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}