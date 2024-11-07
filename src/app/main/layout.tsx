import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default async function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className='flex-grow mx-[30px]'>
                {children}
            </main>
            <Footer/>
        </div>
    );
}
