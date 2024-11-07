import type { Base } from "@/services/types"

export interface Partners extends Base {
    name: string
    description: string
    isActive: boolean
    logoImage: string
    logoImageName: string
    logoImageType: string
    productImage: string
    productImageName: string
    productImageType: string
    createdTime: string
    updatedTime: string
}
