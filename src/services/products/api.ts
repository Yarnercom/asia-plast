import type { Product, ProductsBySubcategoryResponse } from "@/services/products/entity"
import {
  type ProductCreateRequest,
  ProductCreateSchema,
  type ProductUpdateRequest,
  ProductUpdateSchema,
  type ProductsBySubcategoryGetRequest,
  ProductsBySubcategoryGetSchema,
} from "@/services/products/schemes"
import type { CustomResponse } from "@/services/types"
import axios from "axios"
import { fetchWrapper } from "@/services/wrapper"
import type {Category} from "@/services/categories/entity";

export class ProductsApi {
  static async getBySubcategoryProducts(body: ProductsBySubcategoryGetRequest) {
    return await fetchWrapper.get<CustomResponse<ProductsBySubcategoryResponse>>(`/product/subcategory?subcategoryId=${body.subcategoryId}&page=${body.page}&size=${body.size}`, {
    cache: "no-store"
    })
  }

  static async get(productId: number) {
    return await fetchWrapper.get<CustomResponse<Category>>(`/product?productId=${productId}`, { cache: "no-store" })
  }

  static async create(body: ProductCreateRequest) {
    const {
      data: { data },
    } = await axios.post<CustomResponse<string>>("/product", ProductCreateSchema.cast(body))

    return data
  }

  static async update(body: ProductUpdateRequest) {
    const {
      data: { data },
    } = await axios.put<CustomResponse<string>>("/product", ProductUpdateSchema.cast(body))

    return data
  }

  static async delete(productId: number) {
    const {
      data: { data },
    } = await axios.delete<CustomResponse<boolean>>(`/product?productId=${productId}`)

    return data
  }
}
