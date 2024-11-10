"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
    id: number;
    name: string;
    quantity: number;
    images: string[];
    article: number;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    updateItemQuantity: (itemId: number, quantityChange: number) => void;
    clearCart: () => void;
    getTotalQuantity: () => number;
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart: CartItem[] = JSON.parse(savedCart);
            setCartItems(parsedCart); // обновляем состояние корзины
        }
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const updateItemQuantity = (itemId: number, quantityChange: number) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(item.quantity + quantityChange, 1) }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, clearCart, getTotalQuantity, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};
