"use client"

import React from 'react';
import { IconBrandWhatsapp, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

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

    const position1: [number, number] = [42.8854142727642, 74.59256359916779];
    const position2: [number, number] = [42.86284108697292, 74.52016406152877];

    return (
        <footer className='w-full relative pt-[96px] px-[30px] md:px-[127px] bg-[#008ECC] overflow-hidden mt-[50px]'>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-[100px]'>
                <div className='flex items-start gap-[40px] flex-col md:flex-row'>
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
                                        <Link className='whitespace-nowrap' href={link.path}>{link.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-[100%] md:w-[50%] h-[330px]'>

                    <MapContainer center={position1} zoom={12} style={{ height: "350px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position1}>
                            <Popup>Торговый дом РИМИНИ</Popup>
                        </Marker>
                        <Marker position={position2}>
                            <Popup>"Профикс- Юг"</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <div className='mt-[80px] bg-[#05ABF3] w-full h-[1px]'></div>

            <p className='text-[#FFF] text-center my-[30px]'>© 2024 ОсОО лицензия.</p>
        </footer>
    );
};

export default Footer;