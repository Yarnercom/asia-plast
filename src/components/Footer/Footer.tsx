import React from 'react';
import { IconBrandWhatsapp, IconPhone } from '@tabler/icons-react'
import Image from "next/image";
import Circle from '@/assets/circle.svg'

const Footer = () => {
    return (
        <footer className='w-full relative pt-[96px] px-[127px] bg-[#008ECC] overflow-hidden mt-[50px]'>
            <Image
                className="absolute right-[-50px] top-[-50px] w-[300px] h-[300px]"
                width={100}
                height={100}
                src={Circle}
                alt={'circle'}
            />
            <div className='flex items-start justify-center gap-[100px]'>
                <div className='mr-[60px]'>
                    <h2 className='text-[30px] text-[#FFF] mb-[20px]'>АзияПласт</h2>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[#FFF]'>Контакты</p>
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
                        <li>бла бла</li>
                        <li>бла бла</li>
                        <li>бла бла</li>
                        <li>бла бла</li>
                        <li>бла бла</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#FFF] text-[20px] border-b border-[#FFF]'>Категории</h4>
                    <ul className='text-[#FFF] text-[16px] list-disc ml-[20px] mt-[15px] flex flex-col gap-3 justify-center'>
                        <li>бла бла</li>
                        <li>бла бла</li>
                        <li>бла бла</li>
                        <li>бла бла</li>
                        <li>бла бла</li>
                    </ul>
                </div>
            </div>

            <div className='mt-[80px] bg-[#05ABF3] w-full h-[1px]'></div>

            <p className='text-[#FFF] text-center my-[30px]'>© 2024 ОсОО лицензия.</p>
        </footer>
    );
};

export default Footer;