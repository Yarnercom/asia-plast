"use client";

import React, { useState, useEffect } from "react";
import Toolbar from "@/components/Toolbar/Toolbar";
import { News as NewsType } from "@/services/news/entity";
import { IconChevronRight, IconPhotoOff } from "@tabler/icons-react";
import Link from "next/link";
import ViewSwitcher from "@/components/ViewSwitcher";
import { usePathname } from "next/navigation";
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from "framer-motion";

interface NewsProps {
    news: NewsType[] | null;
}

const News: React.FC<NewsProps> = ({ news }) => {
    const blockAnimation = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
            },
        }),
    };

    const [viewMode, setViewMode] = useState<"card" | "list">("card");
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();

    // Проверяем ширину экрана, чтобы скрыть переключатель на мобильных устройствах
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px для мобильных устройств
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Инициализируем при монтировании компонента

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setViewMode("card"); // По умолчанию на мобильных устройствах устанавливаем карточки
        }
    }, [isMobile]);

    if (!news || news.length === 0) {
        return <p></p>;
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={blockAnimation}
            className={"container m-auto mb-[60px]"}
        >
            {pathname === "/main" ? (
                <motion.div custom={2} variants={blockAnimation}>
                    <Toolbar title={"Новости"} link={"/main/news"} />
                </motion.div>
            ) : (
                <motion.div custom={2} variants={blockAnimation}>
                    <TitleInternalComponents title={"Новости"} />
                </motion.div>
            )}

            {/* Скрываем ViewSwitcher на мобильных устройствах */}
            {!isMobile && <ViewSwitcher viewMode={viewMode} onChange={setViewMode} />}

            <div
                className={`mt-12 gap-4 ${
                    viewMode === "card"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "flex flex-col"
                }`}
            >
                {news &&
                    news.slice(0, 3).map((item) => (
                        <div
                            key={item.id}
                            className={`relative ${
                                viewMode === "card"
                                    ? "w-full mb-6"
                                    : "w-full flex flex-col sm:flex-row items-center p-4"
                            } rounded-xl bg-white text-gray-700 shadow-md`}
                        >
                            <div
                                className={`relative ${
                                    viewMode === "card" ? "mx-4 -mt-6" : "w-full sm:w-[40%] h-40 sm:h-auto"
                                } overflow-hidden rounded-xl bg-gradient-to-r from-[#008ECC] to-blue-600 text-white shadow-lg`}
                            >
                                {item.noticeImage && item.noticeImage.length > 0 ? (
                                    <ImageComponent
                                        src={
                                            item.noticeImage
                                                ? `data:image/${item.imageType};base64, ${item.noticeImage}`
                                                : ""
                                        }
                                        alt={item.title}
                                        width={600}
                                        height={600}
                                        className="w-full h-[200px] md:h-[300px] object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <IconPhotoOff color="#FFF" size={60} />
                                    </div>
                                )}
                            </div>

                            <div
                                className={`${
                                    viewMode === "card"
                                        ? "w-full"
                                        : "w-full sm:w-[60%] flex flex-col sm:flex-row justify-between items-end p-4"
                                } rounded-xl bg-white`}
                            >
                                <div className="p-4 sm:p-6">
                                    <p className="text-[#818187] text-xs sm:text-sm">
                                        {new Date(item.createdTime).toLocaleDateString()}
                                    </p>
                                    <h3 className="mb-2 text-lg sm:text-xl font-semibold">{item.title}</h3>
                                    <p className="text-sm sm:text-base line-clamp-2">{item.description}</p>
                                </div>
                                <div className="p-4 sm:p-6 pt-0 w-full sm:w-auto">
                                    <Link
                                        href={`/main/news/${item.id}`}
                                        className="flex items-center gap-2 select-none rounded-lg bg-[#008ECC] py-2 sm:py-3 px-4 sm:px-6 text-center text-xs sm:text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-90 active:opacity-85 disabled:opacity-50"
                                    >
                                        Подробнее
                                        <IconChevronRight color="#FFF" size={20} />
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
