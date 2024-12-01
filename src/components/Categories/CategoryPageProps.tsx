"use client"

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IconPhotoOff } from "@tabler/icons-react";
import '@/components/Categories/CategoryPageProps.css';
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from "framer-motion";

export interface Category {
    id: number;
    name: string;
}

export interface Subcategory {
    id: number;
    name: string;
    categoryId: number;
    subcategoryImage?: string;
    subcategoryImageName?: string;
    subcategoryImageType?: string;
    productsIds: number[];
}

export interface CategoryPageProps {
    categoriesList: Category[] | null;
    subcategoriesList: Subcategory[] | null | undefined;
}

export default function CategoryPage({ categoriesList, subcategoriesList }: CategoryPageProps) {

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

    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();

    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index: number) => {
        setSelectedTab(index);
    };

    useEffect(() => {
        if (id) {
            setSelectedCategoryId(Number(id));
        }
    }, [id]);

    const handleCategoryClick = (categoryId: number) => {
        if (selectedCategoryId !== categoryId) {
            setSelectedCategoryId(categoryId);
        }
    };

    const handleSubcategoryClick = (categoryId: number, subcategoryId: number) => {
        router.push(`/main/categories/${subcategoryId}`);
    };

    const filteredSubcategories = subcategoriesList?.filter(
        (subcat) => subcat.categoryId === selectedCategoryId
    );

    return (
        <motion.section initial="hidden" whileInView="visible" variants={blockAnimation} className='container m-auto'>

            <h1 className=' text-[24px] md:text-[36px] text-center font-bold mb-[40px]'>Каталог пластиковых изделий</h1>

            <div className='flex items-center justify-center w-full'>
                <div
                    className="relative inline-flex flex-row items-start p-0.5 bg-[#FFF] border-[#F5F5F5] border rounded-lg w-full max-w-[600px]">
                    {categoriesList &&
                        categoriesList.map((category, index) => (
                            <div key={category.id} className='h-[40px] flex-1 w-full'>
                                <input
                                    type="radio"
                                    name="tab"
                                    id={`tab${index + 1}`}
                                    className="absolute w-[100px] h-full opacity-0"
                                    checked={selectedTab === index}
                                    onChange={() => handleTabChange(index)}
                                    onClick={() => handleCategoryClick(category.id)}
                                />
                                <label
                                    className={`relative z-[1] flex items-center justify-center w-full h-full text-[12px] text-center cursor-pointer transition-all duration-200 ${
                                        selectedTab === index ? 'text-white opacity-100' : 'text-black opacity-60'
                                    }`}
                                    htmlFor={`tab${index + 1}`}
                                >
                                    {category.name}
                                </label>
                            </div>
                        ))}

                    {categoriesList && categoriesList.length > 0 && (
                        <div
                            className="absolute h-10 bg-[#008ECC] top-0.5 z-9 border border-[rgba(0,0,0,0.04)] shadow-[0_3px_8px_rgba(0,0,0,0.12),0_3px_1px_rgba(0,0,0,0.04)] rounded-md transition-all ease-out duration-200"
                            style={{
                                width: `calc(100% / ${categoriesList.length})`,
                                left: `calc(${(selectedTab * 100) / categoriesList.length}%)`
                            }}
                        ></div>
                    )}

                </div>
            </div>


            <div>
                {selectedCategoryId && filteredSubcategories && filteredSubcategories.length > 0 && (
                    <div className={`w-full mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3`}>
                        {filteredSubcategories?.map((subcategory) => (
                            <motion.div initial={{x: "100%"}}
                                        animate={{x: "0"}} whileInView="visible" variants={blockAnimation}
                                        key={subcategory.id} className="w-full">
                                <div onClick={() => handleSubcategoryClick(selectedCategoryId | 0, subcategory.id)}
                                     className="cursor-pointer relative block w-full bg-[#f2f8f9] rounded-md p-8 text-decoration-none z-0 hover:text-white overflow-hidden before:absolute before:top-[-4rem] before:right-[-4rem] before:bg-[#008ECC] before:h-8 before:w-11 before:rounded-full before:z-[-1] before:transition-transform before:duration-500 hover:before:scale-[27] hover:before:transition-transform">
                                    <div
                                        className="fill-violet-500 w-14 transition-all duration-500 group-hover:fill-white">
                                        {subcategory.subcategoryImage && subcategory.subcategoryImage ? (
                                            <ImageComponent
                                                src={subcategory.subcategoryImage ? `data:image/${subcategory.subcategoryImageType};base64, ${subcategory.subcategoryImage}` : ''}
                                                alt={subcategory.subcategoryImageName || ''}
                                                width={500}
                                                height={500}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className='flex items-center justify-center h-full'>
                                                <IconPhotoOff color="#FFF" size={60}/>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl group-hover:text-white transition-all ease-out duration-500">
                                            {subcategory.name}
                                        </p>
                                        <p className="small text-[14px]"></p>
                                    </div>
                                    <div
                                        className="go-corner absolute flex items-center justify-center w-[40px] h-[40px] overflow-hidden top-0 right-0 bg-[#008ECC] rounded-tr-none rounded-tl-md rounded-bl-full">
                                        <div className="go-arrow text-white mt-[-4px] mr-[-4px] font-courier">
                                            →
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

        </motion.section>
    );
}
