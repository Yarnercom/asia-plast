"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useState, useRef } from "react";
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
        }, 500);
    };

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
                    {navItems.map((item, index) => (
                        <ul key={item.path} className="nav-links">
                            <li
                                className="has-mega"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='nav-links-title'>
                                    <Link href={item.path}>
                                        <div
                                            className={cn(
                                                `whitespace-nowrap hover:text-[#000] text-[14px] rounded-[18px] py-[9px] px-[14px] transition-colors duration-200`,
                                                pathname === item.path ? "text-[#FFF] bg-[#008ECC]" : "text-[#222222] bg-[#F3F9FB] hover:bg-[#008ECC60]"
                                            )}
                                        >
                                            {item.title}
                                        </div>
                                    </Link>
                                </div>

                                {activeIndex !== null && navItems[activeIndex].title === "Каталог" && (
                                    <div className="mega-box">
                                        <div className="content">
                                            {category.map((cat) => (
                                                <div key={cat.id} className="main">
                                                    <div className='main_item'>
                                                        <Link className='flex items-center justify-start gap-2'
                                                              href={`/main/categories`}>
                                                            <p className='text-[14px]'>{cat.name}</p>
                                                            <IconWindowMaximize size={20} color={'#008ECC'}/>
                                                        </Link>
                                                    </div>
                                                    <motion.ul variants={blockAnimation} custom={1}
                                                               initial="hidden" viewport={{once: true}}
                                                               whileInView="visible" className="mega-links">
                                                        {cat.subcategories?.slice(0, 5).map((subCat) => (
                                                            <li key={subCat.id}>
                                                                <div className='mega-links-name'>
                                                                    <Link
                                                                        href={`/main/categories/${subCat.id}`}>
                                                                        {subCat.name}
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        ))}
                                                        <li>
                                                            <Link
                                                                href={`/main/categories`}>
                                                                <div className='mega-links-name'>
                                                                    <p>Все</p>
                                                                </div>
                                                            </Link>
                                                        </li>
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
