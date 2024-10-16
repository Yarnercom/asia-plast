import Image from "next/image";
import Car from '@/assets/iconoir_delivery-truck.svg'

export default async function HeaderTop() {
    return (
        <div className='py-[14px] bg-[#F5F5F5]'>
            <div className='container m-auto flex items-center justify-between'>
                <p className='text-[#666666]'>Приветствуем вас в АзияПласт!</p>

                <ul className='flex items-center gap-[20px]'>
                    <li className='flex items-center gap-[6px] text-[#666666] cursor-pointer'>
                        <Image width={18} height={18} src={Car} alt={'car'}/>
                        Доставка
                    </li>
                </ul>
            </div>
        </div>
    );
};