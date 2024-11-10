"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";
import Toolbar from "@/components/Toolbar/Toolbar";
import ImageComponent from "@/components/ui/ImageComponent";
import './Certificate.css'
import Link from "next/link";
import {usePathname} from "next/navigation";
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import {motion} from "framer-motion";

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

const Certificate: React.FC<CertificateProps> = ({certificate}) => {

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

    const pathname = usePathname();

    if (!certificate || certificate.length === 0) {
        return <Loader/>;
    }

    return (
        <motion.div initial="hidden" whileInView="visible" variants={blockAnimation} viewport={ { amount: 0.3 }} className='container m-auto mb-[60px]'>

            {pathname === '/main' ? (
                <Toolbar title={'Сертификаты'} link={'/main/certificate'}/>
            ) : <TitleInternalComponents title={'Сертификаты'}/>}

            <div className='flex flex-wrap gap-[30px] justify-center'>
                {
                    certificate && certificate.slice(0, 4).map((cert) => (
                        <div key={cert.id} className="certificate">
                            <div className="certificate-details">
                                <ImageComponent
                                    src={cert.certificateImage ? `data:image/${cert.certificateImageType};base64, ${cert.certificateImage}` : ''}
                                    alt={cert.certificateImageName || "Certificate Image"}
                                    width={120}
                                    height={120}
                                    className="w-full object-cover"
                                />
                            </div>
                            <Link href={`/main/certificate/${cert.id}`} className="certificate-button">Подробнее</Link>
                        </div>
                    ))
                }
            </div>

        </motion.div>
    );
};

export default Certificate;
