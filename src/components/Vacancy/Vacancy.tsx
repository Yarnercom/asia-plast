"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";

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

    if (!vacancy || vacancy.length === 0) {
        return <Loader />;
    }

    return (
        <div>
            <div>
                {vacancy.map((job) => (
                    <div key={job.id} className="">
                        <h3>{job.name}</h3>
                        <p>{job.description}</p>
                        {job.offer && <p>{job.offer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VacancyList;
