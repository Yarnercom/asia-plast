import React from 'react';
import './Delivery.css'

interface Capacity {
    id: number;
    capacityFrom: number;
    capacityTo: number;
}

interface District {
    id: number;
    districtName: string;
    capacityPriceMap: Record<string, { id: number; price: number | null }>;
}

interface Division {
    divisionName: string;
    districts: District[];
}

interface DeliveryData {
    capacities: Capacity[];
    divisions: Division[];
}

interface DeliveryPricingProps {
    data: DeliveryData;
}

const Delivery: React.FC = () => {
    const delivery = {
        "data": {
            "capacities": [
                {
                    "id": 1,
                    "capacityFrom": 0,
                    "capacityTo": 800
                },
                {
                    "id": 2,
                    "capacityFrom": 800,
                    "capacityTo": 1300
                },
                {
                    "id": 3,
                    "capacityFrom": 1300,
                    "capacityTo": 2500
                },
                {
                    "id": 4,
                    "capacityFrom": 2500,
                    "capacityTo": 6000
                },
                {
                    "id": 5,
                    "capacityFrom": 6000,
                    "capacityTo": 10000
                },
                {
                    "id": 6,
                    "capacityFrom": 10000,
                    "capacityTo": 12000
                },
                {
                    "id": 7,
                    "capacityFrom": 12000,
                    "capacityTo": 15000
                },
                {
                    "id": 8,
                    "capacityFrom": 15000,
                    "capacityTo": 18000
                },
                {
                    "id": 9,
                    "capacityFrom": 18000,
                    "capacityTo": 20000
                },
                {
                    "id": 10,
                    "capacityFrom": 20000,
                    "capacityTo": 25000
                },
                {
                    "id": 11,
                    "capacityFrom": 25000,
                    "capacityTo": 30000
                }
            ],
            "divisions": [
                {
                    "divisionName": "Город",
                    "districts": [
                        {
                            "id": 1,
                            "districtName": "Зона 1",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 1,
                                    "price": 162
                                },
                                "2": {
                                    "id": 2,
                                    "price": 210
                                },
                                "3": {
                                    "id": 3,
                                    "price": 303
                                },
                                "4": {
                                    "id": 4,
                                    "price": 436
                                },
                                "5": {
                                    "id": 5,
                                    "price": 587
                                },
                                "6": {
                                    "id": 6,
                                    "price": 754
                                },
                                "7": {
                                    "id": 7,
                                    "price": 805
                                },
                                "8": {
                                    "id": 8,
                                    "price": 923
                                },
                                "9": {
                                    "id": 9,
                                    "price": 1076
                                },
                                "10": {
                                    "id": 10,
                                    "price": 1374
                                },
                                "11": {
                                    "id": 11,
                                    "price": 1691
                                }
                            }
                        },
                        {
                            "id": 2,
                            "districtName": "Зона 2",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 12,
                                    "price": 236
                                },
                                "2": {
                                    "id": 13,
                                    "price": 252
                                },
                                "3": {
                                    "id": 14,
                                    "price": 420
                                },
                                "4": {
                                    "id": 15,
                                    "price": 587
                                },
                                "5": {
                                    "id": 16,
                                    "price": 706
                                },
                                "6": {
                                    "id": 17,
                                    "price": 845
                                },
                                "7": {
                                    "id": 18,
                                    "price": 923
                                },
                                "8": {
                                    "id": 19,
                                    "price": 1076
                                },
                                "9": {
                                    "id": 20,
                                    "price": 1231
                                },
                                "10": {
                                    "id": 21,
                                    "price": 1615
                                },
                                "11": {
                                    "id": 22,
                                    "price": 1938
                                }
                            }
                        },
                        {
                            "id": 3,
                            "districtName": "Зона 3",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 23,
                                    "price": 419
                                },
                                "2": {
                                    "id": 24,
                                    "price": 504
                                },
                                "3": {
                                    "id": 25,
                                    "price": 587
                                },
                                "4": {
                                    "id": 26,
                                    "price": 671
                                },
                                "5": {
                                    "id": 27,
                                    "price": 799
                                },
                                "6": {
                                    "id": 28,
                                    "price": 1024
                                },
                                "7": {
                                    "id": 29,
                                    "price": 1108
                                },
                                "8": {
                                    "id": 30,
                                    "price": 1231
                                },
                                "9": {
                                    "id": 31,
                                    "price": 1384
                                },
                                "10": {
                                    "id": 32,
                                    "price": 1906
                                },
                                "11": {
                                    "id": 33,
                                    "price": 2213
                                }
                            }
                        },
                        {
                            "id": 4,
                            "districtName": "Зона 4",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 34,
                                    "price": 587
                                },
                                "2": {
                                    "id": 35,
                                    "price": 671
                                },
                                "3": {
                                    "id": 36,
                                    "price": 754
                                },
                                "4": {
                                    "id": 37,
                                    "price": 769
                                },
                                "5": {
                                    "id": 38,
                                    "price": 923
                                },
                                "6": {
                                    "id": 39,
                                    "price": 1076
                                },
                                "7": {
                                    "id": 40,
                                    "price": 1231
                                },
                                "8": {
                                    "id": 41,
                                    "price": 1384
                                },
                                "9": {
                                    "id": 42,
                                    "price": 1537
                                },
                                "10": {
                                    "id": 43,
                                    "price": 2151
                                },
                                "11": {
                                    "id": 44,
                                    "price": 2460
                                }
                            }
                        }
                    ]
                },
                {
                    "divisionName": "Запад",
                    "districts": [
                        {
                            "id": 5,
                            "districtName": "Сокулук",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 45,
                                    "price": 1118
                                },
                                "2": {
                                    "id": 46,
                                    "price": 1300
                                },
                                "3": {
                                    "id": 47,
                                    "price": 1462
                                },
                                "4": {
                                    "id": 48,
                                    "price": 1537
                                },
                                "5": {
                                    "id": 49,
                                    "price": 1615
                                },
                                "6": {
                                    "id": 50,
                                    "price": 1920
                                },
                                "7": {
                                    "id": 51,
                                    "price": 1998
                                },
                                "8": {
                                    "id": 52,
                                    "price": 2151
                                },
                                "9": {
                                    "id": 53,
                                    "price": 2460
                                },
                                "10": {
                                    "id": 54,
                                    "price": 3460
                                },
                                "11": {
                                    "id": 55,
                                    "price": 3689
                                }
                            }
                        },
                        {
                            "id": 6,
                            "districtName": "Кара-Балта",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 56,
                                    "price": null
                                },
                                "2": {
                                    "id": 57,
                                    "price": null
                                },
                                "3": {
                                    "id": 58,
                                    "price": null
                                },
                                "4": {
                                    "id": 59,
                                    "price": 2460
                                },
                                "5": {
                                    "id": 60,
                                    "price": 2768
                                },
                                "6": {
                                    "id": 61,
                                    "price": 3229
                                },
                                "7": {
                                    "id": 62,
                                    "price": 3535
                                },
                                "8": {
                                    "id": 63,
                                    "price": 3851
                                },
                                "9": {
                                    "id": 64,
                                    "price": 3997
                                },
                                "10": {
                                    "id": 65,
                                    "price": 6303
                                },
                                "11": {
                                    "id": 66,
                                    "price": 7072
                                }
                            }
                        }
                    ]
                },
                {
                    "divisionName": "Восток",
                    "districts": [
                        {
                            "id": 7,
                            "districtName": "Ленинское",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 67,
                                    "price": 1118
                                },
                                "2": {
                                    "id": 68,
                                    "price": 1300
                                },
                                "3": {
                                    "id": 69,
                                    "price": 1462
                                },
                                "4": {
                                    "id": 70,
                                    "price": 1537
                                },
                                "5": {
                                    "id": 71,
                                    "price": 1615
                                },
                                "6": {
                                    "id": 72,
                                    "price": 1920
                                },
                                "7": {
                                    "id": 73,
                                    "price": 1998
                                },
                                "8": {
                                    "id": 74,
                                    "price": 2151
                                },
                                "9": {
                                    "id": 75,
                                    "price": 2460
                                },
                                "10": {
                                    "id": 76,
                                    "price": 3460
                                },
                                "11": {
                                    "id": 77,
                                    "price": 3689
                                }
                            }
                        },
                        {
                            "id": 8,
                            "districtName": "Кант",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 78,
                                    "price": 1462
                                },
                                "2": {
                                    "id": 79,
                                    "price": null
                                },
                                "3": {
                                    "id": 80,
                                    "price": 1691
                                },
                                "4": {
                                    "id": 81,
                                    "price": 1845
                                },
                                "5": {
                                    "id": 82,
                                    "price": 1998
                                },
                                "6": {
                                    "id": 83,
                                    "price": 2153
                                },
                                "7": {
                                    "id": 84,
                                    "price": 2307
                                },
                                "8": {
                                    "id": 85,
                                    "price": 2768
                                },
                                "9": {
                                    "id": 86,
                                    "price": 3075
                                },
                                "10": {
                                    "id": 87,
                                    "price": 4305
                                },
                                "11": {
                                    "id": 88,
                                    "price": 4612
                                }
                            }
                        },
                        {
                            "id": 9,
                            "districtName": "Токмок",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 89,
                                    "price": null
                                },
                                "2": {
                                    "id": 90,
                                    "price": null
                                },
                                "3": {
                                    "id": 91,
                                    "price": null
                                },
                                "4": {
                                    "id": 92,
                                    "price": 2460
                                },
                                "5": {
                                    "id": 93,
                                    "price": 2758
                                },
                                "6": {
                                    "id": 94,
                                    "price": 3229
                                },
                                "7": {
                                    "id": 95,
                                    "price": 3535
                                },
                                "8": {
                                    "id": 96,
                                    "price": 3851
                                },
                                "9": {
                                    "id": 97,
                                    "price": 3997
                                },
                                "10": {
                                    "id": 98,
                                    "price": 6303
                                },
                                "11": {
                                    "id": 99,
                                    "price": 7072
                                }
                            }
                        },
                        {
                            "id": 10,
                            "districtName": "Чолпон-Ата",
                            "capacityPriceMap": {
                                "1": {
                                    "id": 100,
                                    "price": null
                                },
                                "2": {
                                    "id": 101,
                                    "price": null
                                },
                                "3": {
                                    "id": 102,
                                    "price": null
                                },
                                "4": {
                                    "id": 103,
                                    "price": null
                                },
                                "5": {
                                    "id": 104,
                                    "price": 7050
                                },
                                "6": {
                                    "id": 105,
                                    "price": 8450
                                },
                                "7": {
                                    "id": 106,
                                    "price": 9224
                                },
                                "8": {
                                    "id": 107,
                                    "price": 10764
                                },
                                "9": {
                                    "id": 108,
                                    "price": 12298
                                },
                                "10": {
                                    "id": 109,
                                    "price": 16910
                                },
                                "11": {
                                    "id": 110,
                                    "price": 18440
                                }
                            }
                        }
                    ]
                }
            ]
        }
    };

    return (
        <div className="delivery-pricing-container container mx-auto">
            <h2 className="table-title">Стоимость доставки</h2>
            <div className='table-scroll-container'>
                <table className="delivery-pricing-table">
                    <thead>
                    <tr>
                        <th rowSpan={2} className="table-header">№</th>
                        <th rowSpan={2} className="table-header">Количество (литр)</th>
                        {delivery.data.divisions.map((division, divisionIndex) => (
                            <React.Fragment key={divisionIndex}>
                                <th colSpan={division.districts.length} className="division-header">
                                    {division.divisionName}
                                </th>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {delivery.data.divisions.map(division =>
                            division.districts.map(district => (
                                <th className="table-header" key={district.id}>
                                    {district.districtName}
                                </th>
                            ))
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {delivery.data.capacities.map((capacity, index) => (
                        <tr key={capacity.id} className={`table-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                            <td className="table-cell">{index + 1}</td>
                            <td className="table-cell table-cell-quantity">
                                {capacity.capacityFrom === 0
                                    ? `до ${capacity.capacityTo}`
                                    : capacity.capacityTo < 800
                                        ? `до ${capacity.capacityTo}`
                                        : `от ${capacity.capacityFrom} до ${capacity.capacityTo}`}
                            </td>
                            {delivery.data.divisions.map(division =>
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
    );
};

export default Delivery;