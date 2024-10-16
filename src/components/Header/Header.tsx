import HeaderTop from "@/components/Header/HeaderTop";
import NavBar from "@/components/Header/NavBar";
import Cart from '@/assets/Buy.svg'
import Account from '@/assets/user.svg'
import Image from "next/image";

const Header = () => {
    return (
        <header className=''>
            <HeaderTop />
            <div className='container m-auto'>
                <div className='py-[21px] flex items-center justify-between'>

                    <div className='flex items-center'>
                        <h1 className='text-[#008ECC] leading-[20px] text-[32px] drop-shadow-lg'>АзияПласт</h1>
                    </div>

                    <ul className='flex items-center gap-[20px]'>
                        <li className='flex items-center gap-[6px]'>
                            <Image width={24} height={24} src={Cart} alt=""/>
                            <span className='text-[#666666]'>Корзина</span>
                        </li>
                        <li className='bg-[#F3F9FB] rounded-[18px] flex items-center gap-[6px] py-[6px] px-[12px]'>
                            <Image width={24} height={24} src={Account} alt=""/>
                            <span className='text-[#666666]'>Вход</span>
                        </li>
                    </ul>

                </div>
                <NavBar/>
            </div>
        </header>
    );
};

export default Header;