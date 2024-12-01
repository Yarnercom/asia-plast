"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useState } from "react";
import './Header.css';
import { IconWindowMaximize } from "@tabler/icons-react";
import { motion } from "framer-motion";

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

    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number | null) => setActiveIndex(index);
    const handleMouseLeave = () => setActiveIndex(null);

    const navItems = [
        {title: "Главная", path: "/main"},
        {title: "О компании", path: "/main/about"},
        {title: "Новости", path: "/main/news"},
        {title: "Доставка", path: "/main/delivery"},
        {title: "Вакансии", path: "/main/vacancy"},
        {title: "Каталог", path: "/main/categories"},
        {title: "Партнеры", path: "/main/partners"},
    ];


    return (
        <div className="relative w-full">

            <nav className="nav-menu sm:hidden md:hidden lg:hidden xl:block 2xl:block">
                <div className="wrapper">
                    {navItems.map((item) => (
                        <ul key={item.path} className="nav-links">
                            <li className="has-mega" onMouseEnter={() => handleMouseEnter(0)}
                                onMouseLeave={handleMouseLeave}>
                                <div className="nav-links-title">
                                    <Link href={item.path}>
                                        <div
                                            className={cn(
                                                `whitespace-nowrap hover:text-[#000] text-[14px] rounded-[18px] py-[9px] px-[14px] transition-colors duration-200`,
                                                pathname === item.path ? "text-[#FFF] bg-[#008ECC]" : "text-[#222222] bg-[#F3F9FB]"
                                            )}
                                        >
                                            {item.title}
                                        </div>
                                    </Link>
                                </div>
                                {activeIndex !== null && item.title === "Каталог" && (
                                    <div className="mega-box">
                                        <div className="content">
                                            {category.map((cat) => (
                                                <div key={cat.id} className="main">
                                                    <div className='main_item'>
                                                        <Link className="flex items-center justify-center gap-2"
                                                              href={`/main/categories?id=${cat.id}`}>
                                                            <p className="text-[14px]">{cat.name}</p>
                                                            <IconWindowMaximize size={20} color="#008ECC"/>
                                                        </Link>
                                                    </div>
                                                    <motion.ul variants={blockAnimation} custom={1}
                                                               initial="hidden" viewport={{once: true}}
                                                               whileInView="visible" className="mega-links">
                                                        {cat.subcategories?.slice(0, 5).map((subCat) => (
                                                            <li key={subCat.id} className='flex items-center justify-center w-full'>
                                                                <div className='mega-links-name'>
                                                                    <Link
                                                                        className='text-[12px]'
                                                                        href={`/main/categories/${subCat.id}`}>
                                                                        {subCat.name}
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        ))}
                                                        {cat.subcategories && cat.subcategories.length >= 4 && (
                                                            <li className="flex justify-center w-full">
                                                                <Link href={'/main/categories'}
                                                                      className="mega-links-name w-full">
                                                                    <div className="w-full">
                                                                        <p className="w-full">Все</p>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )}
                                                    </motion.ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
