import type { ProductColor } from "@/services/productColors/entity"

export interface ProductImage {
  productId: number
  productImage: string
  productImageType: string
  color: ProductColor
}
