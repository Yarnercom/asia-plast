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
import {PartnersApi} from "@/services/partners/api";

export const metadata: Metadata = { title: 'АзияПласт' }

export default async function Main() {

    const categories = await CategoriesApi.getAll()
    const news = await NewsApi.getAll()
    const certificate = await CertificatesApi.getAll()
    const partners = await PartnersApi.getAll()
    const vacancy = await VacanciesApi.getAll()

    return (
        <div>
            <Categories categories={categories.data}/>
            <News news={news.data}/>
            <Certificate certificate={certificate.data}/>
            <Partner partner={partners.data}/>
            <Vacancy vacancy={vacancy.data}/>
        </div>
    );
};