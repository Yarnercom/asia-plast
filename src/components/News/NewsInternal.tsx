"use client"

import React from 'react';
import { News as NewsType } from "@/services/news/entity";
import { IconPhotoOff } from "@tabler/icons-react";
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from "framer-motion";

interface NewsInternalProps {
    news: NewsType | null;
}

const NewsInternal: React.FC<NewsInternalProps> = ({ news }) => {

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

    if (!news) {
        return <p>Новость не найдена.</p>;
    }


    return (
        <motion.div initial="hidden" whileInView="visible" variants={blockAnimation} className="rounded-lg overflow-hidden w-[100%] m-auto">
            <div className="flex md:flex-row flex-col justify-center">
                <div className="relative w-full sm:w-[550px] h-[350px] float-left rounded-[12px] overflow-hidden">
                    {news.noticeImage && news.noticeImage.length > 0 ? (
                        <ImageComponent
                            src={news.noticeImage ? `data:image/${news.imageType};base64, ${news.noticeImage}` : ''}
                            alt={news.title}
                            width={2500}
                            height={2200}
                            className="w-full h-full object-cover" // Используем object-cover для покрытия всего контейнера
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full">
                            <IconPhotoOff color="#444" size={130}/>
                        </div>
                    )}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"/>
                    <h1 className="absolute bottom-4 left-4 text-3xl text-white font-bold z-10">
                        {news.title || ''}
                    </h1>
                </div>
                <div className="bg-white pt-6">
                    <p className="text-[#000000] text-lg md:text-xl leading-relaxed">
                        {news.description || 'Описания нет.'}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsInternal;
