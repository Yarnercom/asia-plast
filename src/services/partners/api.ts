import type { Partners } from "@/services/partners/entity"
import { PartnersProcessor } from "@/services/partners/processor"
import type {
    PartnersCreateRequest,
    PartnersDeleteRequest,
    PartnersUpdateRequest,
} from "@/services/partners/schemes"
import type { CustomResponse } from "@/services/types"
import { fetchWrapper } from "@/services/wrapper"
import { toFormData } from "@/utils/formData"

export class PartnersApi {
    static async getAll() {
        return await fetchWrapper.get<CustomResponse<Partners[]>>("/partner/all", {
            next: { tags: PartnersProcessor.getTags() },
            cache: "no-store",
        })
    }

    static async get(partnersId: number) {
        return await fetchWrapper.get<CustomResponse<Partners>>(`/partner?partnerId=${partnersId}`)
    }

    static async create(body: PartnersCreateRequest) {
        return await fetchWrapper.postMultipart<CustomResponse<Partners>>("/partner", toFormData(body))
    }

    static async update(body: PartnersUpdateRequest) {
        return await fetchWrapper.putMultipart<CustomResponse<Partners>>("/partner", toFormData(body))
    }

    static async delete({ id }: PartnersDeleteRequest) {
        return await fetchWrapper.delete<CustomResponse<boolean>>(`/partner?partnerId=${id}`)
    }
}
