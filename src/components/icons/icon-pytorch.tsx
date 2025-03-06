'use client'

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const IconBrandPytorch = ({ className }: { className?: string }) => {
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
        <div className={cn("flex justify-center items-center", className)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0.6 1067.9 90.3 109.1" fill={fill} className="h-5" >
                <g>
                    <path fill={fill} d="M77.6,1099.6l-8.1,8.1c13.3,13.3,13.3,34.7,0,47.8c-13.3,13.3-34.7,13.3-47.8,0   c-13.3-13.3-13.3-34.7,0-47.8l0,0l21.1-21.1l3-3l0,0v-15.9l-31.8,31.8c-17.7,17.7-17.7,46.3,0,64c17.7,17.7,46.3,17.7,63.7,0   C95.3,1145.8,95.3,1117.4,77.6,1099.6z" />
                    <circle fill={fill} cx="61.7" cy="1091.8" r="5.9" />
                </g>
            </svg>
        </div>
    );
}
