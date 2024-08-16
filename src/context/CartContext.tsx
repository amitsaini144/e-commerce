"use client"
import React, { createContext, useState, useContext } from 'react';

type CartItem = {
    name: string;
    imageSrc: string;
    price: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (name: string, imageSrc: string, price: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState([]);


    function addToCart(name: string, imageSrc: string, price: string) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.name === name);

            if (existingItem) {
                return prevCart.map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { name, imageSrc, price, quantity: 1 }];
            }
        });
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
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