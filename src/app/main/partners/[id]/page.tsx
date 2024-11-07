import React from 'react';
import { Partners as PartnersType } from "@/services/partners/entity";
import {PartnersApi} from "@/services/partners/api";
import PartnersInternal from "@/components/Partner/PartnersInternal";

interface PartnersIdPageProps {
    params: {
        id: string;
    };
}

export default async function PartnersIdPage({ params }: PartnersIdPageProps) {
    if (!params.id) {
        return <p>Нет такого ID</p>;
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
        return <p>Не верный формат</p>;
    }

    const response = await PartnersApi.get(id);

    return (
        <div className='container mx-auto'>
            <PartnersInternal partners={response.data as PartnersType} />
        </div>
    );
}
