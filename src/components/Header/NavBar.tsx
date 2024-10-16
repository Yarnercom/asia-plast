"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {cn} from "@/utils/cn";

const NavBar = () => {
    const pathname = usePathname();
    const navItems = [
        {title: 'Главная', path: '/main'},
        {title: 'О компании', path: '/main/about'},
        {title: 'Статьи', path: '/main/articles'},
        {title: 'Новости', path: '/main/news'},
        {title: 'Доставка', path: '/main/delivery'},
        {title: 'Вакансии', path: '/main/jobs'},
        {title: 'Каталог', path: '/main/catalog'},
        {title: 'Партнеры', path: '/main/partners'},
        {title: 'Потребности', path: '/main/needs'}
    ];


    return (
        <div className='mb-[44px] flex-wrap items-center flex gap-[10px] border-t-[1px] border-[#EDEDED] border-b-[1px] py-[15px]'>
            {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                    <Link key={item.path} href={item.path}>
                        <div className={cn(`whitespace-nowrap text-sm rounded-[18px] py-[9px] px-[14px]`,
                            isActive ? 'text-[#FFF] bg-[#008ECC]' : 'text-[#222222] bg-[#F3F9FB]')}>
                            {item.title}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBar;
