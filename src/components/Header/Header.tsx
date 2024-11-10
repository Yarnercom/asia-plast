import React from 'react';
import HeaderTop from "@/components/Header/HeaderTop";
import CartModal from "@/components/cart/CartModal";
import {IconShoppingCart} from '@tabler/icons-react';
import './Header.css';
import {Burger} from "@/components/Header/BurgerMenu/Burger";
import NavBar from "@/components/Header/NavBar";
import {CategoriesApi} from "@/services/categories/api";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";

export default async function Header() {

    const category = await CategoriesApi.getAll()

    return (
        <header className="mb-[44px] navbar">
            <HeaderTop/>
            <div className="mx-[30px] relative">
                <div className="container mx-auto">
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center">
                            <h1 className="text-[#008ECC] leading-[20px] text-[32px] drop-shadow-lg">АзияПласт</h1>
                        </div>
                        <div className='md:block sm:block lg:hidden xl:hidden 2xl:hidden'>
                            <Burger/>
                        </div>

                        <NavBar category={category.data as any}/>

                        <ul className="flex items-center gap-[20px]">
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
                        </ul>
                    </div>
                </div>
                <ScrollIndicator/>
            </div>
        </header>
    );
}
