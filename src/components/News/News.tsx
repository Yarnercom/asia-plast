"use client";

import React, {useState} from 'react';
import Toolbar from "@/components/Toolbar/Toolbar";
import {News as NewsType} from "@/services/news/entity";
import {IconChevronRight, IconPhotoOff} from '@tabler/icons-react';
import Link from "next/link";
import ViewSwitcher from "@/components/ViewSwitcher";
import {usePathname} from 'next/navigation';
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import ImageComponent from "@/components/ui/ImageComponent";
import {motion} from "framer-motion";

interface NewsProps {
    news: NewsType[] | null;
}

const News: React.FC<NewsProps> = ({news}) => {

    const blockAnimation = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2
            }
        })
    };


    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const pathname = usePathname();

    if (!news || news.length === 0) {
        return <p></p>;
    }

    return (
        <motion.section initial="hidden" whileInView="visible" variants={blockAnimation} className={'container m-auto mb-[60px]'}>
                {pathname === '/main' ? (
                    <motion.div cutom={2} variants={blockAnimation}>
                        <Toolbar title={'Новости'} link={'/main/news'}/>
                    </motion.div>
                        ) : <motion.div cutom={2} variants={blockAnimation}>
                        <TitleInternalComponents title={'Новости'}/>
                    </motion.div>
                        }

                        <ViewSwitcher viewMode={viewMode} onChange={setViewMode}/>

                        <div
                            className={`mt-[50px] gap-4 ${viewMode === 'card' ? 'grid grid-cols-3' : 'flex flex-col'}`}>
                            {news && news.slice(0, 3).map((item) => (
                                <div key={item.id}
                                     className={`relative ${viewMode === 'card' ? 'w-full mb-[25px]' : 'w-full flex items-center p-4'} rounded-xl bg-white bg-clip-border text-gray-700 shadow-md`}>
                                    <div
                                        className={`relative h-40 ${viewMode === 'card' ? 'mx-4 -mt-6' : 'w-[40%]'} overflow-hidden rounded-xl bg-[#008ECC] bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-[#008ECC] to-blue-600`}>
                                        {item.noticeImage && item.noticeImage.length > 0 ? (
                                            <ImageComponent
                                                src={item.noticeImage ? `data:image/${item.imageType};base64, ${item.noticeImage}` : ''}
                                                alt={item.title}
                                                width={600}
                                                height={600}
                                                className="w-full h-full object-cover"
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
                                            <p className="text-base line-clamp-2">
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
                    </motion.section>
                );
                };

            export default News;
