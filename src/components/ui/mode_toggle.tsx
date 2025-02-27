"use client"

import { useTheme } from "next-themes"
import { forwardRef, useEffect, useState } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const modeToggleVariants = cva(
    "shadow-lg text-base w-28 h-8 flex items-center bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer p-0",
    {
        variants: {
            orientation: {
                horizontal: "",
                vertical: "-rotate-90",
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    }
)

const overlayVariants = cva(
    "absolute w-1/2 h-full bg-white dark:bg-black rounded-full shadow-md flex items-center justify-center",
    {
        variants: {
            orientation: {
                horizontal: "",
                vertical: "",
            },
            theme: {
                light: "",
                dark: "",
            },
        },
        compoundVariants: [
            { orientation: "horizontal", theme: "light", class: "translate-x-14" },
            { orientation: "horizontal", theme: "dark", class: "translate-x-0" },
            { orientation: "vertical", theme: "light", class: "translate-x-14" },
            { orientation: "vertical", theme: "dark", class: "translate-x-0" },
        ],
        defaultVariants: {
            orientation: "horizontal",
            theme: "dark",
        },
    }
)

export interface ModeToggleProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modeToggleVariants> { }

const ModeToggle = forwardRef<HTMLDivElement, ModeToggleProps>(
    ({ className, orientation, ...props }, ref) => {
        const { theme, setTheme } = useTheme()
        const [mounted, setMounted] = useState(false)

        useEffect(() => {
            setMounted(true)
        }, [])

        if (!mounted) return null

        const toggleTheme = () => {
            setTheme(theme === "dark" ? "light" : "dark")
        }

        return (
            <div
                ref={ref}
                className={cn(className, modeToggleVariants({ orientation }))}
                onClick={toggleTheme}
                {...props}
            >
                <div className="w-full h-full flex items-center justify-between font-medium text-black dark:text-white">
                    <div className="w-full text-center">Dark</div>
                    <div className="w-full text-center">Light</div>
                </div>

                <div
                    className={cn(
                        overlayVariants({
                            orientation,
                            theme: theme === "light" ? "light" : "dark",
                        })
                    )}>
                    <span>{theme === "light" ? "Light" : "Dark"}</span>
                </div>
            </div>
        )
    }
)

ModeToggle.displayName = "ModeToggle"

export { ModeToggle, modeToggleVariants }
