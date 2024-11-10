"use client"

import React from 'react';
import Image from "next/image";
import img1 from '@/assets/imageForAboutUs/1.jpg'
import img2 from '@/assets/imageForAboutUs/2.jpg'
import img3 from '@/assets/imageForAboutUs/3.jpg'
import img4 from '@/assets/imageForAboutUs/4.png'
import img5 from '@/assets/imageForAboutUs/5.jpg'
import TitleInternalComponents from "@/components/TitleInternalComponents/TitleInternalComponents";
import {motion} from "framer-motion";

const About = () => {

    const blockAnimation = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.1
            }
        })
    };

    const blocks = [
        {
            img: img1,
            title: "ПЭТ Преформа",
            description: "Нашими клиентами являются как крупные производители, так и небольшие предприятия. ТМ «АзияПЛАСТ» предлагает ПЭТ преформы различного назначения, цвета, веса, диаметра горла. Подробности можно узнать в разделе.",
            details: ""
        },
        {
            img: img2,
            title: "ОБОРУДОВАНИЕ К РЕАЛИЗАЦИИ",
            description: "В 2014 году была проведена модернизация производственных мощностей компании, которая позволила значительно увеличить качество ассортимент готовой продукции. Часть оборудования, со списком которого Вы можете ознакомиться в разделе «ОБОРУДОВАНИЕ К РЕАЛИЗАЦИИ», выставлена на продажу.",
            details: "Среди реализуемого можно встретить как новые агрегаты, так и используемые в течение длительного промежутка времени."
        },
        {
            img: img3,
            title: "Изделия из пластика",
            description: "Вся ПЭТ продукция компании укомплектована соответствующими изделиями из ПНД, ПВД, ПП. Каталог «ИЗДЕЛИЯ ИЗ ПЛАСТИКА» подробно описывает ассортимент сопутствующих товаров. Теперь в производство запущены и изделия для строительной отрасли.",
            details: "О всех новинках нашего предприятия вы можете узнать в разделе «НОВОСТИ»."
        },
        {
            img: img4,
            title: "Доставка",
            description: "Доставка продукции осуществляется до ворот производственного или упаковочного цеха потребителя автотранспортом ТМ «АзияПласт».",
            details: "О способах, стоимости и сроках доставки подробно рассказывает раздел сайта «ДОСТАВКА»."
        },
        {
            img: img5,
            title: "Контакты",
            description: "Менеджеры отдела продаж компании обладают знаниями в области производства изделий из термопластичных полимеров.",
            details: "Для заказа продукции вам необходимо обратиться по телефонам, указанным в разделе «КОНТАКТЫ», и получить подробную консультацию по возможностям нашего оборудования, срокам исполнения заказа и стоимости изделий."
        },
    ];

    return (
        <div className='container mx-auto px-4 py-8'>
            <motion.div custom={1} variants={blockAnimation} viewport={{ once: true }} initial="hidden" whileInView="visible">
                <TitleInternalComponents title={'О компании «АзияПласт»'}/>
            </motion.div>

            <motion.p variants={blockAnimation} custom={1} viewport={{ once: true }} initial="hidden" whileInView="visible" className='text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto'>
                ТМ «АзияПЛАСТ», являющаяся одним из подразделений компании «Профикс-Юг», производит и реализует изделия из термопластичных полимеров. Ассортимент продукции заинтересует производителей различного направления.
            </motion.p>

            {blocks.map((block, index) => (
                <motion.div variants={blockAnimation} custom={index + 2} viewport={{ once: true }} initial="hidden" whileInView="visible" key={index} className="bg-white p-6 mb-8 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center">
                        <Image
                            width={300}
                            height={300}
                            src={block.img}
                            alt={block.title}
                            className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="flex-1 space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800">{block.title}</h2>
                            <p className="text-gray-700 leading-relaxed">{block.description}</p>
                            {block.details && <p className="text-gray-700 leading-relaxed">{block.details}</p>}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default About;
