"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";
import './Vacancy.css'
import Link from "next/link";
import Toolbar from "@/components/Toolbar/Toolbar";
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import {usePathname} from "next/navigation";
import { motion } from "framer-motion";

interface VacancyData {
    id: number;
    name?: string;
    description?: string;
    offer?: string;
}

interface VacancyProps {
    vacancy?: VacancyData[] | null;
}

const VacancyList: React.FC<VacancyProps> = ({ vacancy }) => {

    const blockAnimation = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2
            }
        })
    };

    if (!vacancy || vacancy.length === 0) {
        return <Loader />;
    }
    const pathname = usePathname();

    return (
        <motion.div className='container mx-auto' initial="hidden" whileInView="visible" variants={blockAnimation}>

            {pathname === '/main' ? (
                <Toolbar title={'Вакансии'} link={'/main/vacancy'} />
            ) : <TitleInternalComponents title={'Вакансии'}/>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacancy.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 w-full sm:w-3/4 lg:w-full"
                    >
                        <h3 className="text-2xl font-semibold text-[#008ECC] mb-2">{job.name}</h3>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        {job.offer && (
                            <p className="text-[#008ECC] font-medium bg-[#E6F7FF] p-3 rounded-md mb-[20px]">
                                {job.offer}
                            </p>
                        )}
                        <Link href={'/main/vacancy/' + job.id}
                            className="mt-4 w-full bg-[#008ECC] text-white py-2 px-4 rounded-md hover:bg-[#006ba6] transition-colors duration-300">
                            Подробнее
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default VacancyList;
