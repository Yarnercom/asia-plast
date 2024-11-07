import type { Base } from "@/services/types"

export interface PartnersPresenter extends Base {
    name: string
    description: string
    isActive: boolean
    imgUrl: string
    createdTime: string
    updatedTime: string
    raw: PartnersRawPresenter
}

export interface PartnersRawPresenter extends Base {
    name: string
    description: string
    logoImage: string
}
