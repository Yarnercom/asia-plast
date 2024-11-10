"use client"

import React from 'react';
import { Partners as PartnersType } from "@/services/partners/entity";
import './Partners.css';
import ImageComponent from '@/components/ui/ImageComponent';
import { motion } from "framer-motion";

interface PartnersInternalProps {
    partners: PartnersType | null;
}

const PartnersInternal: React.FC<PartnersInternalProps> = ({ partners }) => {

    const blockAnimation = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2
            }
        })
    };

    if (!partners) {
        return <p>Партнер не найден.</p>;
    }

    return (
        <motion.div initial="hidden" viewport={{ once: true }} custom={1} whileInView="visible" variants={blockAnimation} className="">
            <div className="float-left w-[120px] h-[120px] mr-4 mb-2">
                <ImageComponent
                    src={partners.logoImage ? `data:image/${partners.logoImageType};base64, ${partners.logoImage}` : ''}
                    alt={partners.logoImageName}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                />
            </div>
            <h1 className="text-2xl font-bold">{partners.name}</h1>
            <p className="text-gray-600">{partners.description}</p>
        </motion.div>
    );
};

export default PartnersInternal;
