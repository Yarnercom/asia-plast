import React from 'react';
import NewsInternal from "@/components/News/NewsInternal";
import { NewsApi } from "@/services/news/api";
import { News as NewsType } from "@/services/news/entity";

interface NewsIdPageProps {
    params: {
        id: string;
    };
}

export default async function NewsIdPage({ params }: NewsIdPageProps) {
    if (!params.id) {
        return <p>Нет такого ID</p>;
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
        return <p>Не верный формат</p>;
    }

    const response = await NewsApi.get(id);

    return (
        <div className='container mx-auto'>
            <NewsInternal news={response.data as NewsType} />
        </div>
    );
}
