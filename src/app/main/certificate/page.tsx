import React from 'react';
import Certificate from "@/components/Certificate/Certificate";
import {CertificatesApi} from "@/services/certificates/api";
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Сертификаты' }

export default async function CertificatePage(){

    const certificate = await CertificatesApi.getAll();

    return (
        <div>
            <Certificate certificate={certificate.data}/>
        </div>
    );
};