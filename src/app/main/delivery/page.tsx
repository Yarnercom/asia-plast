import Delivery from "@/components/Delivery/Delivery";
import { DeliveryApi } from "@/services/delivery/api";
import { Delivery as DeliveryType } from "@/services/delivery/entity";
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Доставка' }

export default async function DeliveryPage() {
    const deliveryResponse = await DeliveryApi.getAll();
    const delivery = deliveryResponse.data as DeliveryType[];

    if (!delivery) {
        return <div>Error: Delivery data is unavailable</div>;
    }

    return (
        <div>
            <Delivery delivery={delivery} />
        </div>
    );
}
