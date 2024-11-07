import { z } from "zod"

export const PartnersCreateSchema = z.object({
    name: z
        .string({ required_error: "Заголовок обезательно для заполнения!" })
        .trim()
        .min(1, "Заголовок должно содержать хотя бы 1 символ!"),
    description: z
        .string({ required_error: "Описание обезательно для заполнения!" })
        .trim()
        .min(1, "Описание должно содержать хотя бы 1 символ!"),
    logoImage: z.any().refine((val) => val && "Выберите изображения!"),
    productImage: z.any().refine((val) => val && "Выберите изображения!"),
})

export type PartnersCreateRequest = z.infer<typeof PartnersCreateSchema>

export const PartnersUpdateSchema = PartnersCreateSchema.extend({
    id: z.number({ required_error: "Id обязателен для заполнения!" }),
})

export type PartnersUpdateRequest = z.infer<typeof PartnersUpdateSchema>

export const PartnersToggleActivitySchema = z.object({
    partnerId: z.number({ required_error: "Id обязателен для заполнения!" }),
    isActive: z.boolean({ required_error: "Выберите активность!" }),
})

export type PartnersToggleActivityRequest = z.infer<typeof PartnersToggleActivitySchema>

export const PartnersDeleteSchema = PartnersUpdateSchema.pick({ id: true })

export type PartnersDeleteRequest = z.infer<typeof PartnersDeleteSchema>
