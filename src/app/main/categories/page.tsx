import React from "react";
import { CategoriesApi } from "@/services/categories/api";
import { SubcategoriesApi } from "@/services/subcategories/api";
import CategoryPage from "@/components/Categories/CategoryPageProps";
import Loader from "@/components/Loader/Loader";
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Каталог' }

export default async function Page() {

    const categoriesResponse = await CategoriesApi.getAll();
    const subcategoriesResponse = await SubcategoriesApi.getAll();

    if (!categoriesResponse || !subcategoriesResponse) {
        return <Loader/>;
    }

    return (
        <CategoryPage
            categoriesList={categoriesResponse.data}
            subcategoriesList={subcategoriesResponse.data}
        />
    );
}
