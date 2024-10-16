import React from 'react';
import Toolbar from "@/components/Toolbar/Toolbar";
import Image from "next/image";
import {Category} from "@/services/categories/entity";
import { IconPhotoOff } from '@tabler/icons-react'
import Link from "next/link";

interface CategoriesProps {
    categories: Category[] | null;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {

    if (!categories || categories.length === 0) {
        return <div>Нет категорий</div>;
    }

    return (
        <section className='container m-auto mb-[44px]'>
            <Toolbar title='Категории' link='/main/categories' />

            <ul className='flex items-center gap-4 justify-center'>
                {categories && categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`/main/categories/${category.id}`} className="flex flex-col gap-[20px] items-center">
                            <div
                                className='flex items-center justify-center w-[130px] h-[130px] bg-blue-300 border-2 transition-all hover:border-[#008ECC] rounded-full'>
                                {category.categoryImage ? (
                                    <Image
                                        src={category.categoryImage}
                                        alt={category.name}
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                ) : <IconPhotoOff color={'#FFF'} size={60}/>}
                            </div>
                            <span className='text-[14px] text-[#363A45] font-bold leading-[24.32px]'>{category.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Categories;
