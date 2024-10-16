import {Metadata} from "next";
import {CategoriesApi} from "@/services/categories/api";
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";
import News from "@/components/News/News";
import {NewsApi} from "@/services/news/api";

export const metadata: Metadata = { title: 'Главная' }

export default async function Main() {

    const categories = await CategoriesApi.getAll()
    const categoriesList = categories.data

    const news = await NewsApi.getAll()
    const newsList = news.data
    // const productsList = [
    //     { id: 1, name: "Бутылки" },
    //     { id: 2, name: "Крышки" },
    //     { id: 3, name: "Банки" },
    // ];

    return (
        <div>
            <Categories categories={categoriesList}/>
            <News news={newsList}/>
            <Products />
            home
        </div>
    );
};