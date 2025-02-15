import { IconCaretLeftRightFilled, IconMinus, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const WindowTopBar = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div"> &
    {
        onClose: () => void;
        onMinimize: () => void;
        onFullScreenToggle: () => void;
    }
>(({ className, onClose, onMinimize, onFullScreenToggle }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn("containerflex flex-row gap-2 items-center justify-start w-fit", className)}
            style={{
                height: "1.5rem",
                width: "content",
            }}
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <WindowButton
                onClick={onClose}
                isHovered={isHovered}
                bgColor="bg-red-500 hover:bg-red-400"
            >
                <IconX />
            </WindowButton>
            <WindowButton
                onClick={onMinimize}
                isHovered={isHovered}
                bgColor="bg-yellow-500 hover:bg-yellow-400"
            >
                <IconMinus />
            </WindowButton>
            <WindowButton
                onClick={onFullScreenToggle}
                isHovered={isHovered}
                bgColor="bg-green-500 hover:bg-green-400"
                extraClass="-rotate-45"
            >
                <IconCaretLeftRightFilled />
            </WindowButton>
        </div>
    );
}
);

/** Reusable WindowButton Component */
const WindowButton = React.forwardRef<
    HTMLButtonElement,
    { onClick: () => void; isHovered: boolean; bgColor: string; extraClass?: string; children: React.ReactNode }
>(
    function WindowButton({ onClick, isHovered, bgColor, extraClass = "", children }, ref) {
        return (
            <Button
                ref={ref}
                onClick={onClick}
                className={`rounded-full aspect-square p-0 w-4 h-4 flex items-center justify-center ${bgColor} ${extraClass}`}
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {React.cloneElement(children as React.ReactElement, { className: "text-black/50 h-3 w-3 rounded-full" })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        );
    }
);
