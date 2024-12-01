import React from 'react';
import HeaderTop from "@/components/Header/HeaderTop";
import CartModal from "@/components/cart/CartModal";
import {IconShoppingCart} from '@tabler/icons-react';
import './Header.css';
import NavBar from "@/components/Header/NavBar";
import {CategoriesApi} from "@/services/categories/api";
import BurgerMenu from "@/components/Header/BurgerMenu/BurgerMenu";
import Link from "next/link";
import LoadingBar from "@/components/ScrollIndicator/ScrollIndicator";

export default async function Header() {

    const category = await CategoriesApi.getAll()

    return (
        <header className="mb-[44px] navbar">
            <HeaderTop/>
            <div className="mx-[30px] relative">
                <div className="container mx-auto">
                    <div className='flex items-center justify-between h-[60px]'>
                        <div className="flex items-center h-full">
                            <h1 className="text-[#008ECC] leading-[20px] hidden sm:block text-[32px] drop-shadow-lg">
                                <Link href={'/main'}>АзияПласт</Link>
                            </h1>
                        </div>
                        <div className=''>
                            <NavBar category={category.data as any}/>
                        </div>

                        <ul className="flex items-center gap-[20px] h-full">

                            <li className="flex items-center gap-[6px]">
                                <CartModal
                                    trigger={
                                        <button type="button" className="cursor-pointer flex items-center gap-[6px]">
                                            <IconShoppingCart color={'#008ECC'} size={22}/>
                                            Корзина
                                        </button>
                                    }
                                />
                            </li>

                            <div className='relative sm:block md:block lg:block xl:hidden 2xl:hidden'>
                                <BurgerMenu/>
                            </div>
                        </ul>
                    </div>
                </div>
                <LoadingBar/>
            </div>
        </header>
    );
}
