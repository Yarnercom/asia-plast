import React from 'react';
import {VacanciesApi} from "@/services/vacancies/api";
import { Vacancy as VacancyType } from "@/services/vacancies/entity";
import VacancyInternal from "@/components/Vacancy/VacancyInternalPage";

interface VacancyIdPageProps {
    params: {
        id: string;
    };
}

export default async function VacancyIdPage({ params }: VacancyIdPageProps){

    if (!params.id) {
        return <p>Нет такого ID</p>;
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
        return <p>Не верный формат</p>;
    }

    const response = await VacanciesApi.get(id);

    return (
        <div className='container mx-auto'>
            <VacancyInternal vacancy={response.data as VacancyType}/>
        </div>
    );
};