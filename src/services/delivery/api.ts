import type { Delivery } from "@/services/delivery/entity"
import { DeliveryProcessor } from "@/services/delivery/processor"
import type {
    DeliveryCreateRequest,
    DeliveryDeleteRequest,
    DeliveryUpdateRequest,
} from "@/services/delivery/schemes"
import type { CustomResponse } from "@/services/types"
import { fetchWrapper } from "@/services/wrapper"
import { toFormData } from "@/utils/formData"
import React from "react";

export class DeliveryApi {
    static async getAll() {
        return await fetchWrapper.get<CustomResponse<Delivery[]>>("/delivery/table", {
            next: { tags: DeliveryProcessor.getTags() },
            cache: "no-store",
        })
    }

    static async get(deliveryId: number) {
        return await fetchWrapper.get<CustomResponse<Delivery>>(`/delivery?deliveryId=${deliveryId}`)
    }

    static async create(body: DeliveryCreateRequest) {
        return await fetchWrapper.postMultipart<CustomResponse<Delivery>>("/delivery", toFormData(body))
    }

    static async update(body: DeliveryUpdateRequest) {
        return await fetchWrapper.putMultipart<CustomResponse<Delivery>>("/delivery", toFormData(body))
    }

    static async delete({ id }: DeliveryDeleteRequest) {
        return await fetchWrapper.delete<CustomResponse<boolean>>(`/delivery?deliveryId=${id}`)
    }
}

