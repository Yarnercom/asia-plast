import HeaderTop from "@/components/Header/HeaderTop";
import NavBar from "@/components/Header/NavBar";
import Cart from '@/assets/Buy.svg'
import Image from "next/image";

const Header = () => {
    return (
        <header className='mb-[44px]'>
            <HeaderTop />
            <div className='container m-auto'>
                <div className='py-[21px] flex items-center justify-between border-t-[1px] border-[#EDEDED] border-b-[1px]'>

                    <div className='flex items-center'>
                        <h1 className='text-[#008ECC] leading-[20px] text-[32px] drop-shadow-lg'>АзияПласт</h1>
                    </div>

                    <NavBar/>

                    <ul className='flex items-center gap-[20px]'>
                        <li className='flex items-center gap-[6px]'>
                            <Image width={24} height={24} src={Cart} alt=""/>
                            <span className='text-[#666666]'>Корзина</span>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;