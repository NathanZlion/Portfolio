'use client'

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export const IconCodeforce = ({ className }: { className?: string }) => {
    const { resolvedTheme } = useTheme()
    const [fill, setFill] = useState("#000000")

    // use effect to set fill
    useEffect(() => {
        if (resolvedTheme === "dark") {
            setFill("#ffffff")
        } else {
            setFill("#000000")
        }
    }, [resolvedTheme])

    return (
        <div className={cn(className)}>
            <svg
                className="w-8 h-8"
                fill={fill}
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0
                .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 
                19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 
                1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 
                0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9
                7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5
                1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 
                1.5-1.5h3z" />
            </svg>
        </div>
    );
};