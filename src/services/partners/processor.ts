import type { Partners } from "@/services/partners/entity";
import type { PartnersPresenter } from "@/services/partners/presenter";
import { getBase64DataUrl } from "@/utils/base64";

export class PartnersProcessor {
    private static tags = ["partners"];

    static getTags() {
        return PartnersProcessor.tags;
    }

    static getTag() {
        return PartnersProcessor.tags[0];
    }

    static toPresenterList(partners: Partners[]) {
        const convertToPresenter = (partners: Partners): PartnersPresenter => {
            const imgUrl = getBase64DataUrl(partners.logoImage, partners.logoImageType);

            return {
                id: partners.id,
                name: partners.name,
                description: partners.description,
                isActive: partners.isActive,
                createdTime: partners.createdTime,
                updatedTime: partners.updatedTime,
                imgUrl,
                raw: {
                    id: partners.id,
                    name: partners.name,
                    description: partners.description,
                    logoImage: partners.logoImage,
                },
            };
        };

        return partners.map(convertToPresenter);
    }
}
