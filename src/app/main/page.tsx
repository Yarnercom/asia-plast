import {Metadata} from "next";
import {CategoriesApi} from "@/services/categories/api";
import Categories from "@/components/Categories/Categories";
import News from "@/components/News/News";
import {NewsApi} from "@/services/news/api";
import Certificate from "@/components/Certificate/Certificate";
import {CertificatesApi} from "@/services/certificates/api";
import Partner from "@/components/Partner/Partner";
import {VacanciesApi} from "@/services/vacancies/api";
import Vacancy from "@/components/Vacancy/Vacancy";

export const metadata: Metadata = { title: 'Главная' }

export default async function Main() {

    const categories = await CategoriesApi.getAll()
    const categoriesList = categories.data

    const news = await NewsApi.getAll()
    const newsList = news.data

    const certificate = await CertificatesApi.getAll()
    const certificateList = certificate.data

    const partner = [
        {
            id: 1,
            name: "Partner One",
            description: "Description for Partner One",
            logoImage: "https://example.com/images/logo1.png",
            logoImageName: "logo1.png",
            logoImageType: "image/png",
            productImage: "https://example.com/images/product1.png",
            productImageName: "product1.png",
            productImageType: "image/png",
            createdTime: "2024-10-20T11:46:03.616Z",
            updatedTime: "2024-10-20T11:46:03.616Z",
            isActive: true,
        },
        {
            id: 2,
            name: "Partner Two",
            description: "Description for Partner Two",
            logoImage: "https://example.com/images/logo2.png",
            logoImageName: "logo2.png",
            logoImageType: "image/png",
            productImage: "https://example.com/images/product2.png",
            productImageName: "product2.png",
            productImageType: "image/png",
            createdTime: "2024-10-20T11:46:03.616Z",
            updatedTime: "2024-10-20T11:46:03.616Z",
            isActive: true,
        },
        {
            id: 3,
            name: "Partner Three",
            description: "Description for Partner Three",
            logoImage: "https://example.com/images/logo3.png",
            logoImageName: "logo3.png",
            logoImageType: "image/png",
            productImage: "https://example.com/images/product3.png",
            productImageName: "product3.png",
            productImageType: "image/png",
            createdTime: "2024-10-20T11:46:03.616Z",
            updatedTime: "2024-10-20T11:46:03.616Z",
            isActive: false,
        },
        {
            id: 4,
            name: "Partner Four",
            description: "Description for Partner Four",
            logoImage: "https://example.com/images/logo4.png",
            logoImageName: "logo4.png",
            logoImageType: "image/png",
            productImage: "https://example.com/images/product4.png",
            productImageName: "product4.png",
            productImageType: "image/png",
            createdTime: "2024-10-20T11:46:03.616Z",
            updatedTime: "2024-10-20T11:46:03.616Z",
            isActive: true,
        },
    ];

    const vacancy = await VacanciesApi.getAll()
    const vacancyList = vacancy.data

    return (
        <div>
            <Categories categories={categoriesList}/>
            <News news={newsList}/>
            <Certificate certificate={certificateList}/>
            <Partner partner={partner}/>
            <Vacancy vacancy={vacancyList}/>
            home
        </div>
    );
};