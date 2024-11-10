"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import Toolbar from "@/components/Toolbar/Toolbar";
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import {usePathname} from "next/navigation";
import './Partners.css'
import ImageComponent from "@/components/ui/ImageComponent";
import { motion } from "framer-motion";

interface PartnerData {
    id: number;
    name: string;
    description: string;
    logoImage: string;
    logoImageName: string;
    logoImageType: string;
    productImage: string;
    productImageName: string;
    productImageType: string;
    createdTime: string;
    updatedTime: string;
    isActive: boolean;
}

interface PartnerProps {
    partner?: PartnerData[] | null;
}

const Partner: React.FC<PartnerProps> = ({ partner }) => {

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

    if (!partner || partner.length === 0) {
        return <Loader />;
    }

    const pathname = usePathname();

    return (
        <motion.section initial="hidden" whileInView="visible" variants={blockAnimation} viewport={ { amount: 0.2 }} className='container m-auto mb-[60px]'>

            {pathname === '/main' ? (
                <Toolbar title={'Партнеры'} link={'/main/partners'} />
            ) : <TitleInternalComponents title={'Партнеры'}/>}

            <div className="cards-list">

                {partner && partner.map((part) => (
                    <Link href={`/main/partners/${part.id}`} key={part.id} className="card 1">
                        <div className="card_image">
                            <ImageComponent
                                src={part.logoImage ? `data:image/png;base64, ${part.logoImage}` : ''}
                                alt={part.logoImageName || 'Партнерское лого'}
                                width={120}
                                height={120}
                                className="object-cover"
                            />
                        </div>
                        <div className="card_title title-white">
                            <p>{part.name}</p>
                        </div>
                    </Link>
                ))}

            </div>

        </motion.section>
    );
};

export default Partner;
