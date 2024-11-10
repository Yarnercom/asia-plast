"use client"

import {motion} from "framer-motion"

const Contact = () => {

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

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="mx-auto bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Наши Контакты</h1>

                <div className='flex flex-col gap-4'>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={blockAnimation} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Наш Адрес</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Торговый дом РИМИНИ
                                <br/>
                                Бишкек, Кыргызстан
                            </p>
                            <div className="text-lg text-gray-600 mb-6">
                                <strong>Email: </strong>
                                <a className='text-blue-500 hover:text-blue-700'
                                   href="mailto:rimini.05@mail.ru">rimini.05@mail.ru</a>
                                <br/>
                                <strong>Телефон:</strong>
                                <div className='flex flex-col gap-2'>
                                    <a className='text-blue-500 hover:text-blue-700'
                                       href="tel:+996556091552">+996-556-091-552</a>
                                    <a className='text-blue-500 hover:text-blue-700'
                                       href="tel:+996312323434">+996-312-32-34-34</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Как нас найти</h2>
                            <div className="h-64 bg-gray-300 rounded-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.7904932475016!2d74.59198045607174!3d42.88532739072356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81d709c1925%3A0x5be933aee463ddff!2sTorgovyy%20Dom%20Rimini!5e0!3m2!1sen!2sin!4v1731062780210!5m2!1sen!2sin"
                                    className='w-full h-full' allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </motion.div>

                    <hr/>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={blockAnimation} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Наш Адрес</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                "Профикс- Юг"
                                <br/>
                                Бишкек, Кыргызстан
                            </p>
                            <div className="text-lg text-gray-600 mb-6">
                                <strong>Email: </strong>
                                <a className='text-blue-500 hover:text-blue-700'
                                   href="mailto:strcom52.ru@mail.ru">strcom52.ru@mail.ru</a>
                                <br/>
                                <strong>Телефон:</strong>
                                <div className='flex flex-col gap-2'>
                                    <a className='text-blue-500 hover:text-blue-700'
                                       href="tel:+996312418028">+996-312-41-80-28</a>
                                    <a className='text-blue-500 hover:text-blue-700'
                                       href="tel:+996553066004">+996-553-066-004</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Как нас найти</h2>
                            <div className="h-64 bg-gray-300 rounded-lg">
                                <iframe
                                    className='w-full h-full'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.1250778861659!2d74.5193597807781!3d42.86228313087089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8c234c9a50b%3A0xdb8e8251ad3d444!2s%22Profiks%20Yug%22!5e0!3m2!1sen!2sin!4v1731063406064!5m2!1sen!2sin"
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
