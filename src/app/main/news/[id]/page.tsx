import React from 'react';
import NewsInternal from "@/components/News/NewsInternal";
import { NewsApi } from "@/services/news/api";
import { Metadata } from "next";

interface NewsIdPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: NewsIdPageProps): Promise<Metadata> {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return { title: 'Неверный формат ID' };
    }

    const response = await NewsApi.get(id);

    const newsItem = Array.isArray(response.data) ? response.data[0] : response.data;
    const newsName = newsItem?.title || newsItem?.title || 'Новости';

    return { title: `${newsName}` };
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

    const newsItem = Array.isArray(response.data) ? response.data[0] : response.data;

    if (!newsItem || !newsItem.title || !newsItem.description) {
        return <p>Новость не найдена</p>;
    }

    return (
        <div className='container mx-auto'>
            <NewsInternal news={newsItem} />
        </div>
    );
}
