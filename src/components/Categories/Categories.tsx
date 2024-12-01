"use client";

import React, { useState, useEffect } from "react";
import Toolbar from "@/components/Toolbar/Toolbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import { IconCategory } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";
import './CategoryPageProps.css'
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from "framer-motion";

interface CategoriesProps {
    categories: Category[] | null;
}

interface Subcategory {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
    categoryImage: string;
    categoryImageName?: string;
    imageType: string;
    subcategories: Subcategory[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {

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

    const blockSubcategoriesAnimation = {
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

    const searchParams = useSearchParams();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const timer = setTimeout(() => {
                setActiveIndex(null);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isHovered]);

    if (!categories || categories.length === 0) {
        return <Loader/>;
    }

    return (
        <motion.section initial="hidden" whileInView="visible" variants={blockAnimation} className="container m-auto mb-[60px]">
            <motion.div custom={2} variants={blockAnimation}>
                <Toolbar title="Категории" link="/main/categories" />
            </motion.div>

            <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => {
                    const isActive = searchParams.get("id") === String(category.id);

                    return (
                        <div
                            key={category.id}
                            className="relative group inline-block w-full sm:w-[200px]"
                            onMouseEnter={() => {
                                setActiveIndex(index);
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='rounded-lg overflow-hidden border border-1'>
                                <Link href={`/main/categories`}>
                                    <ImageComponent
                                        src={category.categoryImage ? `data:image/${category.imageType};base64, ${category.categoryImage}` : ''}
                                        alt={category.categoryImageName || ''}
                                        width={1000}
                                        height={1000}
                                        className="h-[150px] sm:w-[200px] object-cover"
                                    />
                                    <div
                                        className={`bg-white py-2 shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4 transition-all duration-300 ease-in-out 
                            ${isActive ? "bg-[#008ECC] text-white shadow-lg transform hover:scale-105" : "text-gray-800 bg-[#F3F9FB] hover:bg-[#E2F3F7] hover:text-[#008ECC] hover:shadow-md"}`}
                                    >
                                        <IconCategory size={20} color={isActive ? 'white' : '#008ECC'} />
                                        <p className="whitespace-nowrap">{category.name}</p>
                                    </div>
                                </Link>
                            </div>

                            {activeIndex === index && category.subcategories.length > 0 && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={blockSubcategoriesAnimation}
                                    className="absolute z-10 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-100 transition-opacity duration-300 min-w-max"
                                >
                                    <ul className="p-4 flex flex-col gap-2">
                                        {category.subcategories.slice(0, 4).map((subcategory) => (
                                            <li key={subcategory.id} className="py-1">
                                                <Link
                                                    href={`/main/categories/${subcategory.id}`}
                                                    className="text-sm text-[#222] font-normal whitespace-nowrap px-[10px] py-[5px] w-full hover:text-[#008ECC]"
                                                >
                                                    {subcategory.name}
                                                </Link>
                                                <hr/>
                                            </li>
                                        ))}
                                        {category.subcategories.length > 4 && (
                                            <li className="py-1">
                                                <Link
                                                    href={`/main/categories`}
                                                    className="flex items-center gap-[6px] text-sm text-[#222] font-normal whitespace-nowrap px-[10px] py-[5px] w-full hover:text-[#008ECC]"
                                                >
                                                    Больше <IconExternalLink size={18} color={'#008ECC'}/>
                                                </Link>
                                                <hr/>
                                            </li>
                                        )}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>

        </motion.section>
    );
};

export default Categories;
