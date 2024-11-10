"use client"

import React from 'react';
import { IconBrandWhatsapp, IconPhone } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import Maps from '@/assets/map/карта.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Footer = () => {
    const links = [
        { title: "Главная", path: "/main" },
        { title: "О компании", path: "/main/about" },
        { title: "Новости", path: "/main/news" },
        { title: "Доставка", path: "/main/delivery" },
        { title: "Вакансии", path: "/main/vacancy" },
        { title: "Каталог", path: "/main/categories" },
        { title: "Партнеры", path: "/main/partners" },
    ];

    return (
        <footer className='w-full relative pt-[96px] px-[127px] bg-[#008ECC] overflow-hidden mt-[50px]'>
            <div className='flex items-start justify-center gap-[100px]'>
                <div className='mr-[60px]'>
                    <h2 className='text-[30px] text-[#FFF] mb-[20px]'>АзияПласт</h2>
                    <div className='flex flex-col gap-4'>
                        <Link href={'/main/contact'} className='text-[#FFF]'>Контакты</Link>
                        <div className='flex items-start gap-3'>
                            <IconBrandWhatsapp color={"#FFF"} size={40}/>
                            <div className='text-[#FFF]'>
                                <p>Whats App</p>
                                <p>+996 707 77 77 77</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <IconPhone color={"#FFF"} size={40}/>
                            <div className='text-[#FFF]'>
                                <p>Номер телефона</p>
                                <p>+996 707 77 77 77</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-[#FFF] text-[20px] border-b border-[#FFF]'>Категории</h4>
                    <ul className='text-[#FFF] text-[16px] list-disc ml-[20px] mt-[15px] flex flex-col gap-3 justify-center'>
                        {
                            links.map((link, idx) => (
                                <li key={idx} className='border-1 hover:border-b-white'>
                                    <Link href={link.path}>{link.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='w-[500px] h-[330px]'>
                    <TransformWrapper>
                        <TransformComponent>
                            <Image className='w-full h-full object-cover' width={2500} height={2500} src={Maps} alt={'map'} />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>

            <div className='mt-[80px] bg-[#05ABF3] w-full h-[1px]'></div>

            <p className='text-[#FFF] text-center my-[30px]'>© 2024 ОсОО лицензия.</p>
        </footer>
    );
};

export default Footer;