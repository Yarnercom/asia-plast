import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IconPhotoOff } from "@tabler/icons-react";
import Image from "next/image";
import '@/components/Categories/CategoryPageProps.css';

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
    subcategoriesList: Subcategory[];
}

export default function CategoryPage({ categoriesList, subcategoriesList }: CategoryPageProps) {
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
        router.push(`/main/${categoryId}/${subcategoryId}`);
    };

    const filteredSubcategories = subcategoriesList.filter(
        (subcat) => subcat.categoryId === selectedCategoryId
    );

    return (
        <section className='container m-auto'>

            <h1 className='text-[36px] text-center font-bold mb-[40px]'>Каталог пластиковых изделий</h1>

            <div className='flex items-center justify-center'>
                <div
                    className="relative inline-flex flex-row items-start p-0.5 bg-[#FFF] border-[#F5F5F5] border rounded-lg">
                    {categoriesList &&
                        categoriesList.map((category, index) => (
                            <div key={category.id} className='h-[40px]'>
                                <input
                                    type="radio"
                                    name="tab"
                                    id={`tab${index + 1}`}
                                    className="absolute w-[130px] h-full opacity-0"
                                    checked={selectedTab === index}
                                    onChange={() => handleTabChange(index)}
                                    onClick={() => handleCategoryClick(category.id)}
                                />
                                <label
                                    className={`relative z-[999] flex items-center justify-center w-[130px] h-full text-[14px] cursor-pointer transition-all duration-200 ${
                                        selectedTab === index ? 'text-white opacity-100' : 'text-black opacity-60'
                                    }`}
                                    htmlFor={`tab${index + 1}`}
                                >
                                    {category.name}
                                </label>
                            </div>
                        ))}

                    <div
                        className="absolute w-[130px] h-10 bg-[#008ECC] top-0.5 z-9 border border-[rgba(0,0,0,0.04)] shadow-[0_3px_8px_rgba(0,0,0,0.12),0_3px_1px_rgba(0,0,0,0.04)] rounded-md transition-all ease-out duration-200"
                        style={{
                            left: `calc(${selectedTab * 130}px + 2px)`
                        }}
                    ></div>
                </div>
            </div>

            {selectedCategoryId && filteredSubcategories.length > 0 && (
                <div className={`w-full mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3`}>
                    {filteredSubcategories.map((subcategory) => (
                        <div key={subcategory.id} className="w-full">
                            <div onClick={() => handleSubcategoryClick(selectedCategoryId, subcategory.id)} className="cursor-pointer relative block w-full bg-[#f2f8f9] rounded-md p-8 text-decoration-none z-0 hover:text-white overflow-hidden before:absolute before:top-[-4rem] before:right-[-4rem] before:bg-[#008ECC] before:h-8 before:w-8 before:rounded-full before:z-[-1] before:transition-transform before:duration-300 hover:before:scale-[27] hover:before:transition-transform">
                                <div className="fill-violet-500 w-12 transition-all duration-300 group-hover:fill-white">
                                    {subcategory.subcategoryImage ? (
                                        <Image className='w-full h-full object-cover' width={500} height={500}
                                               src={subcategory.subcategoryImage || ''}
                                               alt={subcategory.subcategoryImageName || ''}/>
                                    ) : (
                                        <div className='flex items-center justify-center h-full'>
                                            <IconPhotoOff color="#FFF" size={60}/>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold text-xl group-hover:text-white transition-all ease-out duration-300">
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
                        </div>
                    ))}
                </div>
            )}

        </section>
    );
}
