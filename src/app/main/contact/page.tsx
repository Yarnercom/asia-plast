import {Metadata} from "next";
import Contact from "@/components/Contacts/Contacts";

export const metadata: Metadata = { title: 'Контакты' }

const ContactPage = () => {

    return (
        <div>
            <Contact/>
        </div>
    );
};

export default ContactPage;
