import Partner from "@/components/Partner/Partner";
import {PartnersApi} from "@/services/partners/api";
import {Metadata} from "next";

export const metadata: Metadata = { title: 'Партнеры' }

export default async function Partners() {

    const partners = await PartnersApi.getAll()

    return (
        <div>
            <Partner partner={partners.data}/>
        </div>
    );
};