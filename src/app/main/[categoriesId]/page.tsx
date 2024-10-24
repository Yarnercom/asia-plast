"use client";

import { useState, useEffect } from "react";
import { CategoriesApi } from "@/services/categories/api";
import { SubcategoriesApi } from "@/services/subcategories/api";
import CategoryPage, { Category, Subcategory } from "./CategoryPageProps";

export default function Page() {
    const [categoriesList, setCategoriesList] = useState<Category[]>([]);
    const [subcategoriesList, setSubcategoriesList] = useState<Subcategory[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesResponse = await CategoriesApi.getAll();
                const subcategoriesResponse = await SubcategoriesApi.getAll();

                setCategoriesList(categoriesResponse.data as Category[]);
                setSubcategoriesList(subcategoriesResponse.data as Subcategory[]);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <CategoryPage
            categoriesList={categoriesList}
            subcategoriesList={subcategoriesList}
        />
    );
}
