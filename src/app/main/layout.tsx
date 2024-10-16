import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default async function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}
