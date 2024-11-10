import About from "@/components/About/About";
import {Metadata} from "next";

export const metadata: Metadata = { title: 'О компании' }

const AboutPage = () => {
    return (
        <section>
            <About />
        </section>
    );
};

export default AboutPage;