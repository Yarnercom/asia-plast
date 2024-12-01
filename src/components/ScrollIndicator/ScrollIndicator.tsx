"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import './ScrollIndicator.css';

export default function LoadingBar() {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        setIsLoading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        // Когда загрузка завершена
        const timer = setTimeout(() => {
            setIsLoading(false);
            setProgress(100);
        }, 2000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [pathname, isClient]);

    if (!isClient) return null;

    return (
        <>
            {isLoading && (
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: progress / 100 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.2 }}
                />
            )}
        </>
    );
}
