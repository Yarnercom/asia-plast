"use client";

import React from 'react';
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
import Link from "next/link";
import Toolbar from "@/components/Toolbar/Toolbar";
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import {usePathname} from "next/navigation";
import './Partners.css'

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

    const pathname = usePathname();

    return (
        <section className='container m-auto mb-[60px]'>

            {pathname === '/main' ? (
                <Toolbar title={'Партнеры'} link={'/main/partners'} />
            ) : <TitleInternalComponents title={'Партнеры'}/>}

            <div className="cards-list">

                {partner && partner.map((part) => (
                    <Link href={`/main/partners/${part.id}`} key={part.id} className="card 1">
                        <div className="card_image"> <Image className='object-cover' width={800} height={650} src={part?.logoImage ? 'https://www.hubspot.com/hs-fs/hubfs/Starbucks_Corporation_Logo_2011.svg.png?width=400&height=405&name=Starbucks_Corporation_Logo_2011.svg.png' : ''} alt={'/'} /> </div>
                        <div className="card_title title-white">
                            <p>{part.name}</p>
                        </div>
                    </Link>
                ))}

            </div>

        </section>
    );
};

export default Partner;
