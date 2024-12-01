"use client";

import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react'
import { IconMenuDeep, IconTruckDelivery, IconBrandMetabrainz, IconAccessible, IconListLetters, IconSparkles, IconNews, IconUserHexagon } from '@tabler/icons-react'
import Link from "next/link";

const iconsMap: Record<string, React.ElementType> = {
    IconTruckDelivery,
    IconBrandMetabrainz,
    IconAccessible,
    IconListLetters,
    IconSparkles,
    IconNews,
    IconUserHexagon,
};


function BurgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        const body = document.body;
        setIsMenuOpen(!isMenuOpen);

        body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    const navItems = [
        {icon: 'IconBrandMetabrainz', title: "Главная", path: "main"},
        {icon: 'IconUserHexagon', title: "О компании", path: "main/about"},
        {icon: 'IconNews', title: "Новости", path: "main/news"},
        {icon: 'IconTruckDelivery', title: "Доставка", path: "main/delivery"},
        {icon: 'IconAccessible', title: "Вакансии", path: "main/vacancy"},
        {icon: 'IconListLetters', title: "Каталог", path: "main/categories"},
        {icon: 'IconSparkles', title: "Партнеры", path: "main/partners"},
    ];

    return (
        <>
            <button
                onClick={toggleMenu}
                className="p-2 bg-gray-800 text-white rounded-md z-50"
            >
                {isMenuOpen ? <IconX size={20} color={'#fff'}/> : <IconMenuDeep color={'#fff'} size={20}/>}
            </button>

            <div
                className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-40 transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } overflow-y-auto`}
            >
                <div className="p-4 flex justify-between items-center border-b">

                    <button
                        onClick={toggleMenu}
                        className="p-2 bg-gray-800 text-white rounded-md"
                    >
                        <IconX size={20} color={'#fff'}/>
                    </button>

                    <h2 className="text-[#008ECC] leading-[20px] text-[16px] drop-shadow-lg sm:text-[26px]">АзияПласт</h2>
                </div>
                <ul className="p-4 space-y-4">
                    {navItems.map((item, idx) => {
                        const IconComponent = iconsMap[item.icon];
                        return (
                            <li key={idx} className="text-gray-700 flex items-center space-x-2">
                                {IconComponent && <IconComponent size={20} color="#008ECC" />}
                                <Link className='text-[16px] hover:text-[#008ECC] hover:underline' href={`/${item.path}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                    <li className='flex items-center gap-[6px] flex-wrap'>
                        <p>Номер телефона</p>
                        <a className='text-blue-700 hover:underline' href="tel:+996556091552">+996-556-091-552</a>
                    </li>
                    <li>
                        <Link href={'/main/contact'}>Контакты</Link>
                    </li>
                    <li>
                        <Link className='w-[70px] bg-[#F3F9FB] rounded-[18px] flex items-center gap-[6px] py-[6px] px-[12px]' href={'/main/login'}>Вход</Link>
                    </li>
                </ul>
            </div>

            {isMenuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
                ></div>
            )}
        </>
    );
}

export default BurgerMenu;
