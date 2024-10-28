"use client";

import React, { useState } from 'react';
import Toolbar from "@/components/Toolbar/Toolbar";
import { News as NewsType } from "@/services/news/entity";
import { IconChevronRight, IconPhotoOff } from '@tabler/icons-react';
import Link from "next/link";
import Image from "next/image";
import ViewSwitcher from "@/components/ViewSwitcher";
import { usePathname } from 'next/navigation';
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";

interface NewsProps {
    news: NewsType[] | null;
}

const News: React.FC<NewsProps> = ({ news }) => {
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const [isImageBroken, setIsImageBroken] = useState(false);
    const pathname = usePathname();

    if (!news || news.length === 0) {
        return <p></p>;
    }

    return (
        <section className='container m-auto mb-[60px]'>
            {pathname === '/main' ? (
            <Toolbar title={'Новости'} link={'/main/news'} />
            ) : <TitleInternalComponents title={'Новости'}/>}

            <ViewSwitcher viewMode={viewMode} onChange={setViewMode} />

            <div className={`mt-[50px] gap-4 ${viewMode === 'card' ? 'grid grid-cols-3' : 'flex flex-col'}`}>
                {news && news.slice(0, 3).map((item) => (
                    <div key={item.id} className={`relative ${viewMode === 'card' ? 'w-full mb-[25px]' : 'w-full flex items-center p-4'} rounded-xl bg-white bg-clip-border text-gray-700 shadow-md`}>
                        <div
                            className={`relative h-40 ${viewMode === 'card' ? 'mx-4 -mt-6' : 'w-[40%]'} overflow-hidden rounded-xl bg-[#008ECC] bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-[#008ECC] to-blue-600`}>
                            {item.noticeImage && item.noticeImage.length > 0 && !isImageBroken ? (
                                <Image
                                    src={'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    onError={() => setIsImageBroken(true)}
                                />
                            ) : (
                                <div className='flex items-center justify-center h-full'>
                                    <IconPhotoOff color="#FFF" size={60}/>
                                </div>
                            )}
                        </div>
                        <div
                            className={`${viewMode === 'card' ? 'w-80' : 'w-full flex justify-between items-end p-4'} rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'}`}>
                            <div className="p-6">
                                <p className='text-[#818187] text-[13px]'>{new Date(item.createdTime).toLocaleDateString()}</p>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-base">
                                    {item.description}
                                </p>
                            </div>
                            <div className={`p-6 pt-0 w-[196px]`}>
                                <Link href={`/main/news/${item.id}`}
                                      className="flex items-center gap-2 select-none rounded-lg bg-[#008ECC] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.90] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Подробнее
                                    <IconChevronRight color={"#FFF"} size={20}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
