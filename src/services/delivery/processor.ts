import type { Delivery, DeliveryData } from "@/services/delivery/entity";
import type { DeliveryPresenter } from "@/services/delivery/presenter";

export class DeliveryProcessor {
    private static tags = ["delivery"];

    static getTags() {
        return DeliveryProcessor.tags;
    }

    static getTag() {
        return DeliveryProcessor.tags[0];
    }

    static toPresenterList(deliveries: Delivery[], data: DeliveryData) {
        const convertToPresenter = (delivery: Delivery): DeliveryPresenter => {
            // Поиск соответствующих данных для district и capacity
            const district = data.divisions
                .flatMap(division => division.districts)
                .find(d => d.id === delivery.districtId);

            const capacity = data.capacities.find(c => c.id === delivery.capacityId);

            return {
                id: delivery.id,
                price: delivery.price,
                districtId: delivery.districtId,
                capacityId: delivery.capacityId,
                districtName: district?.districtName || "Unknown",
                capacityRange: capacity ? `${capacity.capacityFrom}-${capacity.capacityTo}` : "Unknown",
                raw: {
                    id: delivery.id,
                    price: delivery.price,
                    districtId: delivery.districtId,
                    capacityId: delivery.capacityId,
                    data
                },
            };
        };

        return deliveries.map(convertToPresenter);
    }
}
