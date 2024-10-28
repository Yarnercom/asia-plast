"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/utils/cn";
import {useState, useEffect} from "react";

interface NavItem {
    title: string;
    path: string;
    subcategories?: string[];
}

const NavBar = () => {
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const navItems: NavItem[] = [
        {title: "Главная", path: "/main"},
        {title: "О компании", path: "/main/about"},
        {title: "Новости", path: "/main/news"},
        {title: "Доставка", path: "/main/delivery"},
        {title: "Вакансии", path: "/main/vacancy"},
        {title: "Каталог", path: "/main/catalog", subcategories: ["Продукт 1", "Продукт 2", "Продукт 3", "Продукт 4"]},
        {title: "Партнеры", path: "/main/partners"},
    ];

    useEffect(() => {
        if (!isHovered) {
            const timer = setTimeout(() => {
                setActiveIndex(null);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isHovered]);

    return (
        <div className="relative">
            <div className="flex-wrap items-center flex gap-[10px] group relative">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                        <div
                            key={item.path}
                            className="relative"
                            onMouseEnter={() => {
                                setActiveIndex(index);
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Link href={item.path}>
                                <div
                                    className={cn(
                                        `whitespace-nowrap hover:text-[#222222] text-sm rounded-[18px] py-[9px] px-[14px] transition-colors duration-200`,
                                        isActive ? "text-[#FFF] bg-[#008ECC]" : "text-[#222222] bg-[#F3F9FB]"
                                    )}
                                >
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    );
                })}

                {activeIndex !== null && navItems[activeIndex].subcategories && (
                    <div
                        className="absolute left-0 top-full bg-white shadow-lg py-[30px] z-10 w-full rounded-b-[10px]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="max-w-screen-xl mx-auto flex justify-start gap-[20px] px-[20px]">
                            {navItems[activeIndex].subcategories.map((subcategory) => (
                                <Link href={'/'}
                                      key={subcategory}
                                      className="text-sm text-[#222] font-normal whitespace-nowrap hover:text-[#008ECC]"
                                >
                                    {subcategory}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
