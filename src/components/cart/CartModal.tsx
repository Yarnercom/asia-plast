"use client"

import React, { useEffect, useState } from 'react';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { IconShoppingCartHeart } from '@tabler/icons-react';
import { useCart } from '@/utils/context/CartContext';
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from 'framer-motion';
import {fetchWrapper} from "@/services/wrapper";

type ModalProps = {
    trigger: React.ReactNode;
};

const CartModal: React.FC<ModalProps> = ({ trigger }) => {

    const blockAnimation = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: (custom: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: custom * 0.2
            }
        })
    };

    const { cartItems, removeFromCart, getTotalQuantity, clearCart, updateItemQuantity, setCartItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [whatsAppLink, setWhatsAppLink] = useState<string | null>(null);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCartItems(parsedCart);
        }
    }, [setCartItems]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleIncreaseQuantity = (itemId: number) => {
        updateItemQuantity(itemId, 1);
    };

    const handleDecreaseQuantity = (itemId: number) => {
        updateItemQuantity(itemId, -1);
    };

    const handleOutsideClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('overlay')) {
            closeModal();
        }
    };

    const handleSubmitOrder = async () => {
        const basketData = cartItems.map(item => ({
            id: item.id,
            amount: item.quantity
        }));

        try {
            setLoading(true);
            const response = await fetchWrapper.post('/product/basket', basketData);

            if (response.data.state === 'SUCCESS') {
                setWhatsAppLink(response.data.data);
                window.location.href = response.data.data;
            } else {
                alert(response.data.message || 'Ошибка');
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            alert('Произошла ошибка при отправке данных');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveItem = (itemId: number) => {
        removeFromCart(itemId);
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleClearCart = () => {
        clearCart();
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    return (
        <div className='container mx-auto'>
            <div onClick={openModal}>
                {trigger}
            </div>

            {isOpen && (
                <motion.div
                    initial="hidden" whileInView="visible" variants={blockAnimation}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overlay"
                    onClick={handleOutsideClick}
                >
                    <div className="bg-white p-6 rounded-lg max-w-[600px] w-full relative shadow-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-700 transition-colors"
                        >
                            <IconSquareRoundedX color={'currentColor'} size={30} />
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Корзина</h2>

                        {cartItems.length > 0 ? (
                            <motion.div initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }} custom={1} whileInView="visible" variants={blockAnimation}>
                                <ul className="max-h-[400px] overflow-y-auto">
                                    {cartItems.map((item) => (
                                        <li key={item.id} className="flex justify-between items-center py-2 border-b">
                                            <div className="flex items-center space-x-4">
                                                <div className="rounded-lg overflow-hidden">
                                                    {item.images.slice(0, 1)?.map((image: any) => (
                                                        <ImageComponent
                                                            key={image.id}
                                                            src={image.productImage ? `data:image/${image.productImageType};base64, ${image.productImage}` : ""}
                                                            alt={image.productImageName}
                                                            width={600}
                                                            height={600}
                                                            className="object-cover w-[120px] h-[170px]"
                                                        />
                                                    ))}
                                                </div>
                                                <div className='flex items-center gap-4 md:flex-row flex-col'>
                                                    <div className='flex flex-col gap-2'>
                                                        <span className="font-medium">{item.name}</span>
                                                        <span className='text-gray-500'>Артикул: {item.article}</span>
                                                    </div>

                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => handleDecreaseQuantity(item.id)}
                                                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                                                        >
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            onClick={() => handleIncreaseQuantity(item.id)}
                                                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>

                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-red-500 hover:text-red-700 ml-4"
                                            >
                                                <IconSquareRoundedX size={20}/>
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg font-semibold">Кол-во продуктов:</span>
                                    <span className="text-lg">{getTotalQuantity()}</span>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={handleClearCart}
                                        className="flex-1 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Очистить
                                    </button>
                                    <button
                                        onClick={handleSubmitOrder}
                                        className="flex-1 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        disabled={loading}
                                    >
                                        {loading ? 'Отправка...' : 'Оформить заказ'}
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className='flex items-center justify-center gap-2 text-gray-500'>
                                <p className="text-center text-gray-500">Добавьте продукты в корзину</p>
                                <IconShoppingCartHeart color={'currentColor'} size={30} />
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default CartModal;
