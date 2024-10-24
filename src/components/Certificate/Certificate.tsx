"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
import Toolbar from "@/components/Toolbar/Toolbar";

interface CertificateData {
    id: number;
    name?: string;
    description?: string;
    certificateImage: string;
    certificateImageName?: string;
    certificateImageType?: string;
}

interface CertificateProps {
    certificate?: CertificateData[] | null;
}

const Certificate: React.FC<CertificateProps> = ({ certificate }) => {
    if (!certificate || certificate.length === 0) {
        return <Loader />;
    }

    return (
        <div className='container m-auto mb-[60px]'>

            <Toolbar title={'Сертификаты'} link={'/main/certificate'} />

            <div className='flex items-center gap-3 justify-center'>
                {
                    certificate && certificate.slice(0, 4).map((cert) => (
                        <div key={cert.id}
                             className='h-[207px] w-full relative rounded-[16px] shadow border border-1 overflow-hidden group'>
                            <Image className="w-full h-full object-cover"
                                   width={1450}
                                   height={1353}
                                   src={'https://marketplace.canva.com/EAE4chwDon8/1/0/1600w/canva-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82-%D0%BE-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8-%D0%BA%D1%83%D1%80%D1%81%D0%B0-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%B0%D1%84%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B0-%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC-%D1%81-%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%BC-%D0%B8-%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%BC-%D0%B3%D0%B5%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D1%84%D0%BE%D0%BD%D0%BE%D0%BC-8L29ss2y2aI.jpg'}
                                   alt={cert.certificateImageName || "Certificate Image"}
                            />
                            <div
                                className='absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 ease-in-out'/>
                            <div
                                className='absolute bottom-0 left-0 w-full transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-[20px]'>
                                <p className='text-white'>{cert.name}</p>
                                <p className='text-white'>{cert.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Certificate;
