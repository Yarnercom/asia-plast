import Partner from "@/components/Partner/Partner";
import {PartnersApi} from "@/services/partners/api";

export default async function Partners() {

    const partners = await PartnersApi.getAll()

    return (
        <div>
            <Partner partner={partners.data}/>
        </div>
    );
};