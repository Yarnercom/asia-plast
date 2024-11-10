import React from 'react';
import SubCategories from "@/components/Categories/subCategories/SubCategories";
import {Subcategory as SubcategoryType} from "@/services/subcategories/entity";
import {SubcategoriesApi} from "@/services/subcategories/api";
import {ProductsApi} from "@/services/products/api";
import {Metadata} from "next";

interface SubCategoriesIdPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: SubCategoriesIdPageProps): Promise<Metadata> {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return { title: 'Неверный формат ID' };
    }

    const response = await SubcategoriesApi.get(id);
    const subCategoryName = response.data?.name || 'Подкатегория';

    return { title: `Подкатегория - ${subCategoryName}` };
}

export default async function SubCategoryIdPage({params}: SubCategoriesIdPageProps) {
    if (!params.id) {
        return <p>Нет такого ID</p>;
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
        return <p>Не верный формат</p>;
    }

    try {
        const subcategoryResponse = await SubcategoriesApi.get(id);

        const productsResponse = await ProductsApi.getBySubcategoryProducts({
            subcategoryId: id,
            page: 1,
            size: 100
        });

        const subcategoryData = subcategoryResponse.data as SubcategoryType;
        const productsData = productsResponse.data ? productsResponse.data.products : [];

        return (
            <SubCategories subcategory={{...subcategoryData, products: productsData}}/>
        );
    } catch (error) {
        console.error("Ошибка запроса:", error);
        return <p>Произошла ошибка при загрузке данных.</p>;
    }
};
