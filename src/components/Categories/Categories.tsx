"use client";

import React, { useState, useEffect } from "react";
import Toolbar from "@/components/Toolbar/Toolbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import { IconCategory } from "@tabler/icons-react";
import Image from "next/image";
import './CategoryPageProps.css'

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
        <section className="container m-auto mb-[60px]">
            <Toolbar title="Категории" link="/main/categories" />

            <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => {
                    const isActive = searchParams.get("id") === String(category.id);

                    return (
                        <div
                            key={category.id}
                            className="relative group inline-block"
                            onMouseEnter={() => {
                                setActiveIndex(index);
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='rounded-lg overflow-hidden border border-1'>
                                <Link href={`/main/${category.id}`}>
                                    <Image width={550} height={550} className='w-[250px]' src={'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'} alt={'/'} />
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
                                <div
                                    className="absolute z-10 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-100 transition-opacity duration-300 min-w-max"
                                >
                                    <ul className="p-4 flex flex-col gap-2">
                                        {category.subcategories.map((subcategory) => (
                                            <li key={subcategory.id} className="py-1">
                                                <Link
                                                    href={`/main/${category.id}/${subcategory.id}`}
                                                    className="text-sm text-[#222] font-normal whitespace-nowrap hover:text-[#008ECC]"
                                                >
                                                    {subcategory.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Categories;
