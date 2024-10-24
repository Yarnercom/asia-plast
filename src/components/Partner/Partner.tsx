"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
import Link from "next/link";
import Toolbar from "@/components/Toolbar/Toolbar";

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
    if (!partner || partner.length === 0) {
        return <Loader />;
    }

    return (
        <section className='container m-auto mb-[60px]'>

            <Toolbar title={'Партнеры'} link={'/main/partners'} />

            <div className='flex items-center gap-3 justify-center'>
                {partner && partner.map((part) => (
                    <div key={part.id} className="flex justify-center items-center">
                        <Link
                            className="group flex justify-center p-1 px-[30px] rounded-md drop-shadow-xl from-gray-800 text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]"
                            href="/"
                        >
                            <Image
                                className='object-cover w-[100px] h-[100px]'
                                src={part?.logoImage && 'https://www.hubspot.com/hs-fs/hubfs/Starbucks_Corporation_Logo_2011.svg.png?width=400&height=405&name=Starbucks_Corporation_Logo_2011.svg.png'}
                                alt={part?.logoImageName || 'logo'}
                                width={550}
                                height={550}
                            />
                            <span
                                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-md group-hover:-translate-y-10 duration-500"
                            >
                                {part.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partner;
