"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IconPhotoOff } from "@tabler/icons-react";
import '@/components/Categories/CategoryPageProps.css';
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from "framer-motion";

export interface Category {
    id: number;
    name: string;
}

export interface Subcategory {
    id: number;
    name: string;
    categoryId: number;
    subcategoryImage?: string;
    subcategoryImageName?: string;
    subcategoryImageType?: string;
    productsIds: number[];
}

export interface CategoryPageProps {
    categoriesList: Category[] | null;
    subcategoriesList: Subcategory[] | null | undefined;
}

export default function CategoryPage({ categoriesList, subcategoriesList }: CategoryPageProps) {

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

    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();

    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

    useEffect(() => {
        if (id) {
            setSelectedCategoryId(Number(id));
        }
    }, [id]);

    const handleCategoryClick = (categoryId: number) => {
        if (selectedCategoryId !== categoryId) {
            setSelectedCategoryId(categoryId);
            router.push(`/main/categories?id=${categoryId}`);
        }
    };

    const filteredSubcategories = subcategoriesList?.filter(
        (subcat) => subcat.categoryId === selectedCategoryId
    );

    return (
        <motion.section initial="hidden" whileInView="visible" variants={blockAnimation} className="container m-auto">
            <h1 className="text-center font-bold mb-[40px]">Каталог пластиковых изделий</h1>
            <div className="flex items-center justify-center w-full">
                <div className="relative inline-flex flex-row items-start p-0.5 bg-[#FFF] border-[#F5F5F5] border rounded-lg w-full max-w-[600px]">
                    {categoriesList &&
                        categoriesList.map((category, index) => (
                            <div key={category.id} className="h-[40px] flex-1 w-full">
                                <input
                                    type="radio"
                                    name="tab"
                                    id={`tab${index + 1}`}
                                    className="absolute w-[100px] h-full opacity-0"
                                    checked={selectedCategoryId === category.id}
                                    onChange={() => handleCategoryClick(category.id)}
                                />
                                <label
                                    className={`relative z-[1] flex items-center justify-center w-full h-full text-[12px] text-center cursor-pointer transition-all duration-200 ${selectedCategoryId === category.id ? 'bg-[#008ECC] rounded-[10px] text-white opacity-100' : 'text-black opacity-60'}`}
                                    htmlFor={`tab${index + 1}`}
                                >
                                    {category.name}
                                </label>
                            </div>
                        ))}
                </div>
            </div>

            <div>
                {selectedCategoryId && filteredSubcategories && filteredSubcategories.length > 0 && (
                    <div className="w-full mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {filteredSubcategories.map((subcategory) => (
                            <motion.div initial={{x: "100%"}}
                                        animate={{x: "0"}} whileInView="visible" variants={blockAnimation} key={subcategory.id} className="w-full">
                                <div onClick={() => router.push(`/main/categories/${subcategory.id}`)} className="cursor-pointer block w-full bg-[#f2f8f9] rounded-md p-8">
                                    <div className="w-14">
                                        {subcategory.subcategoryImage ? (
                                            <ImageComponent
                                                src={`data:image/${subcategory.subcategoryImageType};base64, ${subcategory.subcategoryImage}`}
                                                alt={subcategory.subcategoryImageName || ''}
                                                width={500}
                                                height={500}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <IconPhotoOff color="#FFF" size={60} />
                                        )}
                                    </div>
                                    <p className="font-bold text-xl">{subcategory.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </motion.section>
    );
}
