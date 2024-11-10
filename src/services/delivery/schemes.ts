import { z } from "zod";

// Обновленная схема для создания доставки
export const DeliveryCreateSchema = z.object({
    price: z
        .string({ required_error: "Поле обязательно для заполнения!" })
        .trim()
        .min(1, "Цена должна содержать хотя бы 1 символ!"),
    districtId: z
        .string({ required_error: "Район обязателен для заполнения!" })
        .trim()
        .min(1, "Описание должно содержать хотя бы 1 символ!"),
    capacityId: z
        .string({ required_error: "Поле обязательно для заполнения!" })
        .trim()
        .min(1, "Поле должно содержать хотя бы 1 символ!"),
    // Добавление нового поля для data
    data: z.object({
        capacities: z.array(
            z.object({
                id: z.number(),
                capacityFrom: z.number(),
                capacityTo: z.number(),
            })
        ),
        divisions: z.array(
            z.object({
                divisionName: z.string(),
                districts: z.array(
                    z.object({
                        id: z.number(),
                        districtName: z.string(),
                        capacityPriceMap: z.record(
                            z.string(),
                            z.object({
                                id: z.number(),
                                price: z.number(),
                            })
                        ),
                    })
                ),
            })
        ),
    }),
});

export type DeliveryCreateRequest = z.infer<typeof DeliveryCreateSchema>;

// Обновленная схема для обновления доставки
export const DeliveryUpdateSchema = DeliveryCreateSchema.extend({
    id: z.number({ required_error: "Id обязателен для заполнения!" }),
});

export type DeliveryUpdateRequest = z.infer<typeof DeliveryUpdateSchema>;

// Схема для изменения активности доставки
export const DeliveryToggleActivitySchema = z.object({
    districtId: z.number({ required_error: "Id обязателен для заполнения!" }),
    capacityId: z.number({ required_error: "Id обязателен для заполнения!" }),
});

export type DeliveryToggleActivityRequest = z.infer<typeof DeliveryToggleActivitySchema>;

// Схема для удаления доставки
export const DeliveryDeleteSchema = DeliveryUpdateSchema.pick({ id: true });

export type DeliveryDeleteRequest = z.infer<typeof DeliveryDeleteSchema>;
