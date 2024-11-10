"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageComponent {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

const ImageComponent: React.FC<ImageComponent> = ({ src, alt, width, height, className }) => {
    const [isImageBroken, setIsImageBroken] = useState(false);

    const handleImageError = () => {
        setIsImageBroken(true);
    };

    const defaultImage = 'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg';

    const imageSrc = isImageBroken || !src ? defaultImage : src;

    return (
        <Image
            className={`${className} object-cover`}
            width={width}
            height={height}
            src={imageSrc}
            alt={alt}
            onError={handleImageError}
        />
    );
};

export default ImageComponent;
