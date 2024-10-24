"use client";

import React, { useState, useEffect } from "react";
import Toolbar from "@/components/Toolbar/Toolbar";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";

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

            <div className="relative mb-[44px]">
                <div
                    className="flex-wrap items-center flex gap-[10px] py-[15px] group relative">
                    {categories.map((category, index) => {
                        const isActive = searchParams.get("id") === String(category.id);

                        return (
                            <div
                                key={category.id}
                                className="relative"
                                onMouseEnter={() => {
                                    setActiveIndex(index);
                                    setIsHovered(true);
                                }}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Link href={`/main/${category.id}`}>
                                    <div
                                        className={cn(
                                            `whitespace-nowrap text-sm rounded-lg py-2 px-4 transition-all duration-300 ease-in-out`,
                                            isActive
                                                ? "text-white bg-[#008ECC] shadow-lg transform hover:scale-105"
                                                : "text-gray-800 bg-[#F3F9FB] hover:bg-[#E2F3F7] hover:text-[#008ECC] hover:shadow-md"
                                        )}
                                    >
                                        {category.name}
                                    </div>
                                </Link>

                                {activeIndex === index && category.subcategories.length > 0 && (
                                    <div
                                        className="absolute left-0 top-full bg-white shadow-lg py-[30px] z-10 rounded-b-[10px]"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <div
                                            className="max-w-screen-xl mx-auto flex justify-start gap-[20px] px-[20px]">
                                            {category.subcategories.map((subcategory) => (
                                                <Link
                                                    href={`/main/${category.id}/${subcategory.id}`}
                                                    key={subcategory.id}
                                                    className="text-sm text-[#222] font-normal whitespace-nowrap hover:text-[#008ECC]"
                                                >
                                                    {subcategory.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default Categories;
