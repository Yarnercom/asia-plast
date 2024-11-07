import Image from "next/image";
import Car from '@/assets/iconoir_delivery-truck.svg'
import { IconPhone } from '@tabler/icons-react'
import Account from "@/assets/user.svg";
import Link from "next/link";

export default async function HeaderTop() {
    return (
        <div className='py-[14px] bg-[#F5F5F5] px-[30px]'>
            <div className='container m-auto flex items-center justify-between'>
                <p className='text-[#666666]'>Приветствуем вас в Лого!</p>

                <ul className='flex items-center gap-[20px]'>
                    <li className=''>
                        <Link className='flex items-center gap-[6px] text-[#666666] cursor-pointer' href={'/main/delivery'}>
                            <Image width={18} height={18} src={Car} alt={'car'}/>
                            Доставка
                        </Link>
                    </li>
                    <li className='flex items-center gap-[6px] text-[#666666] cursor-pointer'>
                        <IconPhone size={18} color={"#008ECC"}/>
                        Контакты
                    </li>
                    <li className='cursor-pointer bg-[#F3F9FB] rounded-[18px] flex items-center gap-[6px] py-[6px] px-[12px]'>
                        <Image width={24} height={24} src={Account} alt=""/>
                        <span className='text-[#666666]'>Вход</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};