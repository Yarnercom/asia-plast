"use client"

import React, { useState } from 'react';
import { News as NewsType } from "@/services/news/entity";
import { IconPhotoOff } from "@tabler/icons-react";
import Image from "next/image";

interface NewsInternalProps {
    news: NewsType | null;
}

const NewsInternal: React.FC<NewsInternalProps> = ({ news }) => {
    const [isImageBroken, setIsImageBroken] = useState(false);

    if (!news) {
        return <p>Новость не найдена.</p>;
    }

    const isBase64 = news.noticeImage && news.noticeImage.startsWith('data:image');

    return (
        <div className="rounded-lg overflow-hidden w-[90%] m-auto">
            <div className="my-12">
                <div className="relative h-[50vh]">
                    {news.noticeImage && news.noticeImage.length > 0 && !isImageBroken ? (
                        <Image
                            width={1500}
                            height={1200}
                            src={isBase64 ? news.noticeImage : `/${news.noticeImage}`}
                            alt={news.title || 'Новость'}
                            className="w-full h-full object-cover"
                            onError={() => setIsImageBroken(true)}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <IconPhotoOff color="#444" size={130} />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"/>
                    <h1 className="absolute bottom-4 left-4 text-3xl text-white font-bold">
                        {news.title}
                    </h1>
                </div>
                <div className="bg-white pt-6">
                    <p className="text-[#000000] text-lg md:text-xl leading-relaxed">
                        {news.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsInternal;
