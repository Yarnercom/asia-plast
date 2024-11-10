import React from 'react';
import { Certificate as CertificatesType } from "@/services/certificates/entity";
import CertificateInternal from "@/components/Certificate/CertificateInternal";
import {CertificatesApi} from "@/services/certificates/api";
import {Metadata} from "next";

interface CertificateIdPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: CertificateIdPageProps): Promise<Metadata> {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return { title: 'Неверный формат ID' };
    }

    const response = await CertificatesApi.get(id);
    const certificateName = response.data?.name || 'Сертификаты';

    return { title: `Сертификат - ${certificateName}` };
}

export default async function CertificateIdPage({ params }: CertificateIdPageProps) {
    if (!params.id) {
        return <p>Нет такого ID</p>;
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
        return <p>Не верный формат</p>;
    }

    const response = await CertificatesApi.get(id);

    return (
        <div className='container mx-auto'>
            <CertificateInternal certificate={response.data as CertificatesType} />
        </div>
    );
}
