"use client"

import React, { useState } from "react";
import { Subcategory as SubcategoryType } from "@/services/subcategories/entity";
import Link from "next/link";
import ImageComponent from "@/components/ui/ImageComponent";
import { IconShoppingCartDown } from "@tabler/icons-react";
import { useCart } from '@/utils/context/CartContext';
import { motion } from "framer-motion";

interface SubCategoryInternalProps {
    subcategory: SubcategoryType & { products?: any[] };
}

const SubCategories: React.FC<SubCategoryInternalProps> = ({ subcategory }) => {

    const blockAnimation = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2
            }
        })
    };

    const { addToCart } = useCart();
    const [isPressed, setIsPressed] = useState(false);

    const handleAddToCart = (product: any) => {
        addToCart({
            id: product.id,
            name: product.name,
            quantity: 1,
            images: product.images,
            article: product.idFromFactoryBd
        });
    };

    const handleIconClick = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 300); // сброс состояния через 300 мс
    };

    if (!subcategory) {
        return <p>Подкатегория не найдена.</p>;
    }

    return (
        <motion.div initial="hidden" whileInView="visible" variants={blockAnimation} className="container w-full mx-auto p-3 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{subcategory.name}</h2>
            {subcategory.products && subcategory.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {subcategory.products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <div className="relative flex items-center justify-center">
                                {product.images?.map((image: any) => (
                                    <ImageComponent
                                        key={image.id}
                                        src={image.productImage ? `data:image/${image.productImageType};base64, ${image.productImage}` : ""}
                                        alt={image.productImageName}
                                        width={120}
                                        height={120}
                                        className="object-cover w-[300px] h-[300px]"
                                    />
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
                            <div className="mt-4 flex items-center gap-2">
                                <p className="text-md font-semibold text-gray-800">Артикул: {product.idFromFactoryBd}</p>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <Link
                                    href={`/main/categories/${subcategory.id}/${product.id}`}
                                    className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Купить
                                </Link>
                                <button
                                    onClick={() => {
                                        handleAddToCart(product);
                                        handleIconClick();
                                    }}
                                    className={`text-[#0DC268] flex items-center gap-2 ${isPressed ? 'transform scale-110' : ''} transition-all duration-200`}
                                >
                                    <IconShoppingCartDown size={30} color={'currentColor'}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Продукты не найдены.</p>
            )}
        </motion.div>
    );
};

export default SubCategories;
