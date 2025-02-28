"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { Book, CodeIcon, ConstructionIcon, GemIcon, HomeIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

export const NavBar = ({ className }: { className?: string }) => {
    const isMobile = useIsMobile();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems: { name: string; link: string; icon: JSX.Element }[] = [
        {
            name: "Home",
            link: "/",
            icon: <HomeIcon />
        },
        {
            name: "Skills",
            link: "#skills",
            icon: <CodeIcon />,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: <ConstructionIcon />,
        },
        {
            name: "Education",
            link: "#education",
            icon: <Book />,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <GemIcon />,
        },
    ];

    return (
        <div
            className={cn(
                "flex gap-3 max-w-fit fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-background z-[5000] p-2 lg:p-5 items-center justify-center space-x-4 transition-all duration-200 font-extrabold md:outline md:outline-slate-900/15",
                isMobile ? "bottom-5" : "top-5",
                className,
                visible ? "opacity-100" : "opacity-0 -translate-y-10"
            )}
        >
            {navItems.map((navItem, idx) => (
                <Tooltip key={`link=${idx}`}>
                    <TooltipTrigger>
                        <Link
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                        >
                            {isMobile && <span className="block">{navItem.icon}</span>}

                            <span className="hidden md:block sm:text-sm">{navItem.name}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        {/* shows tooltip only on mobile */}
                        {isMobile && navItem.name}
                    </TooltipContent>
                </Tooltip>
            ))
            }
        </div >
    );
};


