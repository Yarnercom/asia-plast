"use client"

import React from 'react';
import {DeliveryData} from "@/services/delivery/entity";
import './Delivery.css'
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import Image from "next/image";
import Maps from "@/assets/map/карта.png";
import { motion } from 'framer-motion';

interface DeliveryPricingProps {
    delivery: DeliveryData | null;
}

const Delivery: React.FC<DeliveryPricingProps> = ({delivery}) => {

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

    if (!delivery) {
        return <div>Loading...</div>;
    }

    return (
        <motion.div initial="hidden" whileInView="visible" variants={blockAnimation} className='flex flex-col gap-4 mb-[40px]'>

            <div className="delivery-pricing-container container mx-auto">
                <div className="delivery-pricing-container container mx-auto">
                    <h2 className="table-title">Стоимость доставки</h2>
                    <div className='table-scroll-container'>
                        <table className="delivery-pricing-table">
                            <thead>
                            <tr>
                                <th rowSpan={2} className="table-header">№</th>
                                <th rowSpan={2} className="table-header">Количество (литр)</th>
                                {delivery.divisions.map((division, divisionIndex) => (
                                    <React.Fragment key={divisionIndex}>
                                        <th colSpan={division.districts.length} className="division-header">
                                            {division.divisionName}
                                        </th>
                                    </React.Fragment>
                                ))}
                            </tr>
                            <tr>
                                {delivery.divisions.map(division =>
                                    division.districts.map(district => (
                                        <th className="table-header" key={district.id}>
                                            {district.districtName}
                                        </th>
                                    ))
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {delivery.capacities.map((capacity, index) => (
                                <tr key={capacity.id}
                                    className={`table-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                                    <td className="table-cell">{index + 1}</td>
                                    <td className="table-cell table-cell-quantity">
                                        {capacity.capacityFrom === 0
                                            ? `до ${capacity.capacityTo}`
                                            : capacity.capacityTo < 800
                                                ? `до ${capacity.capacityTo}`
                                                : `от ${capacity.capacityFrom} до ${capacity.capacityTo}`}
                                    </td>
                                    {delivery.divisions.map(division =>
                                        division.districts.map(district => {
                                            const price = district.capacityPriceMap[capacity.id]?.price;
                                            return (
                                                <td className="table-cell" key={district.id}>
                                                    {price !== null ? price : ' '}
                                                </td>
                                            );
                                        })
                                    )}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <motion.div custom={1} viewport={{ once: true }} variants={blockAnimation} initial="hidden" whileInView="visible" className='flex items-center justify-center'>
                <div className='w-[800px] h-[430px] p-[20px]'>
                    <TransformWrapper>
                        <TransformComponent>
                            <Image className='w-full h-full object-cover' width={2500} height={2500} src={Maps}
                                   alt={'map'}/>
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </motion.div>

        </motion.div>
    )
        ;
};

export default Delivery;