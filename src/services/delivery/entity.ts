import type { Base } from "@/services/types";

export interface Capacity {
    id: number;
    capacityFrom: number;
    capacityTo: number;
}

export interface CapacityPrice {
    id: number;
    price: number;
}

export interface District {
    id: number;
    districtName: string;
    capacityPriceMap: Record<string, CapacityPrice>;
}

export interface Division {
    divisionName: string;
    districts: District[];
}

export interface Delivery extends Base {
    price: number;
    districtId: number;
    capacityId: number;
}

export interface DeliveryData {
    capacities: Capacity[];
    divisions: Division[];
}
