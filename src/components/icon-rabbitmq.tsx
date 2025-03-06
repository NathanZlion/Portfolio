'use client'

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const IconBrandRabbitMQ = ({ className }: { className?: string }) => {
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
            <svg viewBox="0 0 132.29167 132.29166" className="h-4" xmlns="http://www.w3.org/2000/svg">
                <defs id="defs1" />
                <g id="layer1" transform="translate(-76.200105,-115.62292)">
                    <g id="g1" transform="matrix(3.3139169,0,0,3.3139169,76.216727,114.23118)"
                        strokeWidth="0.0798401">
                        <path d="M 39.42,17.37 H 26.65 a 1.59,1.59 0 0 1 -1.6,-1.6 V 3 A 1.59,1.59 0 0 0 23.45,1.41 H 18.67 A 1.59,1.59 0 0 0 17.07,3 v 12.77 a 1.59,1.59 0 0 1 -1.6,1.6 h -4.78 a 1.59,1.59 0 0 1 -1.6,-1.6 V 3 A 1.59,1.59 0 0 0 7.49,1.4 H 2.7 A 1.59,1.59 0 0 0 1.11,3 v 36.72 a 1.59,1.59 0 0 0 1.6,1.6 h 36.71 a 1.59,1.59 0 0 0 1.6,-1.6 V 19 a 1.59,1.59 0 0 0 -1.6,-1.63 z M 33,30.93 a 2.39,2.39 0 0 1 -2.39,2.4 h -3.2 a 2.39,2.39 0 0 1 -2.39,-2.4 v -3.19 a 2.39,2.39 0 0 1 2.39,-2.4 h 3.2 a 2.39,2.39 0 0 1 2.39,2.4 z" transform="translate(-1.11,-0.98)" id="path10"
                            fill={fill} strokeWidth="0.0798401" />
                    </g>
                </g>
            </svg>
        </div>
    );
}
