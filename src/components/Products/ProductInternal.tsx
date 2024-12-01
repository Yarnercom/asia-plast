"use client"

import React, { useState } from 'react';
import { Product as ProductsType } from "@/services/products/entity";
import ImageComponent from "@/components/ui/ImageComponent";
import { useCart } from "@/utils/context/CartContext";
import { motion } from "framer-motion";

interface ProductInternalProps {
    product: ProductsType | null;
}

const ProductInternal: React.FC<ProductInternalProps> = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product?.images[0] || null);

    const blockAnimation = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2
            }
        })
    };

    const { addToCart } = useCart();

    const handleAddToCart = (product: any) => {
        addToCart({
            id: product.id,
            name: product.name,
            quantity: 1,
            images: product.images,
            article: product.idFromFactoryBd
        });
    };

    const handleColorClick = (image: any) => {
        setSelectedImage(image); // Обновляем выбранное изображение при клике
    };

    if (!product) {
        return <p className="text-center text-xl text-red-600">Продукт не найден.</p>;
    }

    return (
        <motion.section initial="hidden" whileInView="visible" variants={blockAnimation} className="container mx-auto">
            <div className="flex flex-wrap md:flex-nowrap items-start gap-8">
                <div className="w-full md:w-[35%] bg-gray-100 p-4 rounded-lg shadow-lg">
                    {selectedImage && (
                        <div className="grid grid-cols-1 gap-4">
                            <div className="w-full">
                                <ImageComponent
                                    src={selectedImage.productImage ? `data:image/${selectedImage.productImageType};base64, ${selectedImage.productImage}` : ''}
                                    alt={selectedImage.productImage}
                                    width={600}
                                    height={600}
                                    className="object-cover w-full h-full rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full md:w-[60%]">
                    <div className="mb-6">
                        <motion.h1 initial="hidden" viewport={{ once: true }} custom={1} whileInView="visible" variants={blockAnimation} className="text-4xl font-semibold text-gray-800 leading-tight">{product.name}</motion.h1>
                        {product.idFromFactoryBd && (
                            <motion.p initial="hidden" viewport={{ once: true }} custom={2} whileInView="visible" variants={blockAnimation} className="text-lg text-gray-600 mt-2">Артикул: <span
                                className="font-semibold">{product.idFromFactoryBd}</span></motion.p>
                        )}
                    </div>

                    {product.productCharacteristics && product.productCharacteristics.length > 0 && (
                        <div>
                            <motion.h2 initial="hidden" viewport={{ once: true }} custom={3} whileInView="visible" variants={blockAnimation} className="text-3xl font-medium text-gray-700 mt-6">Характеристики</motion.h2>
                            <ul className="list-none mt-4">
                                {product.productCharacteristics.map((item: any) => (
                                    <motion.li initial="hidden" viewport={{ once: true }} custom={3} whileInView="visible" variants={blockAnimation} key={item.id} className="flex items-center gap-3 text-gray-600 mb-4">
                                        <span className="font-medium">{item.characteristicName}:</span>
                                        <span>{item.value}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <motion.div initial="hidden" viewport={{ once: true }} custom={3} whileInView="visible" variants={blockAnimation} className="flex items-center gap-4">
                        {product.images.map((image: any, index: number) => (
                            <div key={index} className="flex flex-col items-center">
                                <p>{image.color?.name}</p>
                                <div
                                    className={`w-[50px] h-[50px] rounded-lg transition-all ${
                                        selectedImage === image ? 'border-4 border-white' : ''
                                    }`}
                                    style={{
                                        backgroundColor: image.color?.hexCode,
                                        boxShadow: selectedImage === image
                                            ? '0px 5px 15px rgba(0, 0, 255, 0.5), 0px 10px 20px rgba(0, 0, 0, 0.15)'
                                            : '0px 5px 10px rgba(0, 0, 0, 0.15)',
                                    }}
                                    onClick={() => handleColorClick(image)} // При клике обновляем выбранную картинку
                                ></div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.button
                        initial="hidden" custom={3} viewport={{ once: true }} whileInView="visible" variants={blockAnimation}
                        onClick={() => {
                            handleAddToCart(product);
                        }}
                        className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold text-xl rounded-md shadow-xl hover:bg-blue-700 active:shadow-sm active:scale-95"
                    >
                        Положить в корзину
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
};

export default ProductInternal;
