import React from 'react';
import {Vacancy as VacancyType} from "@/services/vacancies/entity";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import {  IconPhone } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";

interface VacancyInternalProps {
    vacancy: VacancyType | null;
}

const VacancyInternal: React.FC<VacancyInternalProps> = ({ vacancy }) => {

    if (!vacancy) {
        return <p>Вакансия не найдена.</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{vacancy.name}</h2>
            <p className="text-gray-700 mb-4">{vacancy.description}</p>
            <p className="text-lg font-semibold text-blue-600 mb-6">{vacancy.offer}</p>

            <div className="border-t border-gray-300 pt-4 mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Контакты</h3>
                <div className='flex flex-col gap-3'>
                    <div className="flex items-center gap-2">
                        <IconPhone size={30} color={'#007BFF'} />
                        <span className="text-gray-700">Телефон: +123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconMail size={30} color={'#007BFF'} />
                        <span className="text-gray-700">Email: example@mail.com</span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-4">
                    <div className='flex items-center gap-2'>
                        <IconBrandWhatsapp size={20} color={'#25D366'}/>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            WhatsApp
                        </a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IconBrandFacebook size={20} color={'#4267B2'}/>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacancyInternal;