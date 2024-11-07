"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useState, useRef } from "react";
import './Header.css';

interface Category {
    id: number;
    name: string;
    subcategories?: Subcategory[];
}

interface Subcategory {
    id: number;
    name: string;
    subSubcategories?: SubSubcategory[];
}

interface SubSubcategory {
    id: number;
    name: string;
}

const NavBar = ({ category }: { category: Category[] }) => {
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState<number | null>(null);

    const closeMenuTimeout = useRef<number | null>(null);

    const handleMouseEnter = (index: number | null) => {
        if (closeMenuTimeout.current !== null) {
            clearTimeout(closeMenuTimeout.current as number);
        }
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        closeMenuTimeout.current = window.setTimeout(() => {
            setActiveIndex(null);
            setHoveredCategory(null);
            setHoveredSubCategory(null);
        }, 500);
    };

    const handleCategoryMouseEnter = (catId: number) => {
        if (closeMenuTimeout.current !== null) {
            clearTimeout(closeMenuTimeout.current as number);
        }
        setHoveredCategory(catId);
    };

    const handleSubCategoryMouseEnter = (subCatId: number) => {
        if (closeMenuTimeout.current !== null) {
            clearTimeout(closeMenuTimeout.current as number);
        }
        setHoveredSubCategory(subCatId);
    };

    const navItems = [
        { title: "Главная", path: "/main" },
        { title: "О компании", path: "/main/about" },
        { title: "Новости", path: "/main/news" },
        { title: "Доставка", path: "/main/delivery" },
        { title: "Вакансии", path: "/main/vacancy" },
        { title: "Каталог", path: "/main/categories" },
        { title: "Партнеры", path: "/main/partners" },
    ];

    return (
        <div className="relative">
            <div className="flex-wrap items-center flex gap-[10px] group relative">
                {navItems.map((item, index) => (
                    <div
                        key={item.path}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href={item.path}>
                            <div
                                className={cn(
                                    `whitespace-nowrap hover:text-[#008ECC] text-sm rounded-[18px] py-[9px] px-[14px] transition-colors duration-200`,
                                    pathname === item.path ? "text-[#FFF] bg-[#008ECC]" : "text-[#222222] bg-[#F3F9FB]"
                                )}
                            >
                                {item.title}
                            </div>
                        </Link>
                    </div>
                ))}

                {activeIndex !== null && navItems[activeIndex].title === "Каталог" && (
                    <div
                        className="absolute left-0 top-full bg-white shadow-lg py-[10px] z-10 w-full rounded-b-[10px] transition-opacity duration-200"
                        onMouseEnter={() => handleMouseEnter(activeIndex)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-screen-xl mx-auto flex gap-[10px] py-[10px] px-[20px]">
                            {category.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="relative"
                                    onMouseEnter={() => handleCategoryMouseEnter(cat.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={`/main/${cat.id}`}
                                        className="text-sm text-[#222] font-medium whitespace-nowrap hover:text-[#008ECC]"
                                    >
                                        {cat.name}
                                    </Link>

                                    {hoveredCategory === cat.id && cat.subcategories && (
                                        <div
                                            className="absolute left-0 top-full mt-2 bg-white shadow-lg py-[10px] px-[10px] rounded-md w-[200px] transition-opacity duration-200"
                                            onMouseEnter={() => handleCategoryMouseEnter(cat.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {cat.subcategories.map((subCat) => (
                                                <div
                                                    key={subCat.id}
                                                    className="relative"
                                                    onMouseEnter={() => handleSubCategoryMouseEnter(subCat.id)}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <Link
                                                        href={`/main/categories/${cat.id}/${subCat.id}`}
                                                        className="block text-sm text-[#555] font-normal whitespace-nowrap hover:text-[#008ECC] py-[5px]"
                                                    >
                                                        {subCat.name}
                                                    </Link>

                                                    {hoveredSubCategory === subCat.id && subCat.subSubcategories && (
                                                        <div
                                                            className="absolute left-0 top-full mt-2 bg-white shadow-lg py-[10px] px-[10px] rounded-md w-[200px] transition-opacity duration-200"
                                                            onMouseEnter={() => handleSubCategoryMouseEnter(subCat.id)}
                                                            onMouseLeave={handleMouseLeave}
                                                        >
                                                            {subCat.subSubcategories.map((subSubCat) => (
                                                                <Link
                                                                    href={`/main/categories/${cat.id}/${subCat.id}/${subSubCat.id}`}
                                                                    key={subSubCat.id}
                                                                    className="block text-sm text-[#555] font-normal whitespace-nowrap hover:text-[#008ECC] py-[5px]"
                                                                >
                                                                    {subSubCat.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
