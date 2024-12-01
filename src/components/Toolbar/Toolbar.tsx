import React from 'react';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react'

interface ToolbarProps {
    title: string;
    link: string;
}

const Toolbar: React.FC<ToolbarProps> = ({title, link}) => {
    return (
        <div className="border-b-[#EDEDED] border-b-[1px] mb-[30px] flex items-center justify-between">
            <div className="relative">
                <h2 className="text-[#008ECC] text-[24px] italic mb-[10px]">
                    {title}
                </h2>
                <div className="absolute left-0 right-0 bottom-0 h-[2px] w-[160px] bg-[#008ECC] rounded-full"/>
            </div>
            {
                link && (
                    <Link href={link} className='flex items-center gap-[12px]'>
                        <div className='sm:block hidden'>
                            <span>Смотреть всё</span>
                        </div>
                        <div>
                            <IconChevronRight color={'#008ECC'} size={15}/>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default Toolbar;


// <div className='flex items-center justify-center gap-4 mt-[50px]'>
//     {news && news.map((item) => (
//         <div key={item.id}
//              className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//             <div
//                 className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-[#008ECC] bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-[#008ECC] to-blue-600">
//                 {item.noticeImage ? (
//                     <Image
//                         src={item.noticeImage}
//                         alt={item.title}
//                         className=""
//                         width={100}
//                         height={100}
//                     />
//                 ) : (
//                     <IconPhotoOff color="#FFF" size={60}/>
//                 )}
//             </div>
//             <div className="p-6">
//                 <p className='text-[#818187] text-[13px]'>{new Date(item.createdTime).toLocaleDateString()}</p>
//                 <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                     {item.title}
//                 </h3>
//                 <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//                     {item.description}
//                 </p>
//             </div>
//             <div className="p-6 pt-0 w-[196px]">
//                 <Link href={'/'}
//                       className="flex items-center gap-2 select-none rounded-lg bg-[#008ECC] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//                     Подробнее
//                     <IconChevronRight color={"#FFF"} size={20}/>
//                 </Link>
//             </div>
//         </div>
//     ))}
// </div>