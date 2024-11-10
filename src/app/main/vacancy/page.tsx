import Vacancy from "@/components/Vacancy/Vacancy";
import {VacanciesApi} from "@/services/vacancies/api";
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Вакансии' }

export default async function Jobs() {

    const vacancies = await VacanciesApi.getAll()

    return (
        <div>
            <Vacancy vacancy={vacancies.data}/>
        </div>
    );
};