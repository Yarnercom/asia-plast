import type { Base } from "@/services/types";
import type { DeliveryData } from "@/services/delivery/entity";

export interface DeliveryRawPresenter extends Base {
    price: number;
    districtId: number;
    capacityId: number;
    data: DeliveryData;
}

export interface DeliveryPresenter extends Base {
    price: number;
    districtId: number;
    capacityId: number;
    districtName: string;
    capacityRange: string;
    raw: DeliveryRawPresenter;
}
