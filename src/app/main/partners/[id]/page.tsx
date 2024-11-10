import React from 'react';
import { Partners as PartnersType } from "@/services/partners/entity";
import { PartnersApi } from "@/services/partners/api";
import PartnersInternal from "@/components/Partner/PartnersInternal";
import { Metadata } from "next";

interface PartnersIdPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: PartnersIdPageProps): Promise<Metadata> {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return { title: 'Неверный формат ID' };
    }

    const response = await PartnersApi.get(id);
    const partnerName = response.data?.name || 'Партнер';

    return { title: `Партнеры - ${partnerName}` };
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
