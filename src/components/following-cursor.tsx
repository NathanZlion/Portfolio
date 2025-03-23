"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import useMousePosition from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "motion/react";


export default function FollowingCursor() {
    const { x, y } = useMousePosition();
    const isMobile = useIsMobile()

    const SIZE = 40;

    const cursorX = useMotionValue(x - SIZE / 2);
    const cursorY = useMotionValue(y - SIZE / 2);

    cursorX.set(x - SIZE / 2);
    cursorY.set(y - SIZE / 2);

    const smoothX = useSpring(cursorX, { stiffness: 250, damping: 20, mass: 0.5 });
    const smoothY = useSpring(cursorY, { stiffness: 250, damping: 20, mass: 0.5 });

    if (isMobile)
        return <></>;

    return (
        <motion.div
            transition={{ type: "tween", ease: "backOut" }}
            style={{
                x: smoothX,
                y: smoothY,

            }}
            className={cn(
                "fixed z-[9999] outline outline-primary/50 rounded-full pointer-events-none",
                `w-[40px] h-[40px]`
            )}
        >

            {/* center dot */}
            <motion.div
                className="absolute w-1 h-1 bg-primary/50 rounded-full"
                style={{
                    x: SIZE / 2,
                    y: SIZE / 2,
                }}
            />
        </motion.div>
    );
}
