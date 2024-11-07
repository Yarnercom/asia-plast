"use client";

import React, { useState } from 'react';
import { Partners as PartnersType } from "@/services/partners/entity";
import './Partners.css';
import Image from "next/image";

interface PartnersInternalProps {
    partners: PartnersType | null;
}

const PartnersInternal: React.FC<PartnersInternalProps> = ({ partners }) => {
    const [isImageBroken, setIsImageBroken] = useState(false);

    if (!partners) {
        return <p>Партнер не найден.</p>;
    }

    const defaultImage = 'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg';

    const isBase64 = partners.logoImage && partners.logoImage.startsWith('data:image');

    const handleImageError = () => {
        setIsImageBroken(true);
    };

    const imageSrc = isImageBroken || !partners.logoImage ? defaultImage : partners.logoImage;

    return (
        <div className="clearfix">
            <div className="float-left w-[120px] h-[120px] mr-4 mb-2">
                <Image
                    className="object-cover w-full h-full"
                    width={120}
                    height={120}
                    src={isBase64 ? partners.logoImage : imageSrc}
                    alt={partners.logoImageName}
                    onError={handleImageError}
                />
            </div>
            <h1 className="text-2xl font-bold">{partners.name}</h1>
            <p className="text-gray-600">{partners.description}</p>
        </div>
    );
};

export default PartnersInternal;
