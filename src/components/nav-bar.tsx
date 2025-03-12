'use client'

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from 'react-scroll';
import { useIsMobile } from "@/hooks/use-mobile";
import { Book, CodeIcon, ConstructionIcon, GemIcon, HomeIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";


export const NavBar = ({ className }: { className?: string }) => {
    const isMobile = useIsMobile();
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const SCROLL_SENSITIVITY = -5;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            if (isMobile || currentScrollY < 50) {
                setVisible(true);
            } else if (delta > 0) {
                // Scrolling down -> hide
                setVisible(false);
            } else if (delta < SCROLL_SENSITIVITY) {
                // Scrolling up -> show
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, SCROLL_SENSITIVITY]);


    const navItems: { name: string; link: string; icon: JSX.Element }[] = [
        {
            name: "Hero",
            link: "hero",
            icon: <HomeIcon size={28} />
        },
        {
            name: "Skills",
            link: "skills",
            icon: <CodeIcon size={28} />,
        },
        {
            name: "Projects",
            link: "projects",
            icon: <ConstructionIcon size={28} />,
        },
        {
            name: "Experience",
            link: "experience",
            icon: <GemIcon size={28} />,
        },
        {
            name: "Education",
            link: "education",
            icon: <Book size={28} />,
        },
    ];

    return (
        <div
            className={cn(
                "flex p-3 md:p-2  gap-6 backdrop-blur-md w-fit  fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-md md:rounded-full bg-background/80 z-[50] lg:p-5 items-center justify-center space-x-4 transition-all duration-200 font-extrabold md:outline md:outline-slate-900/15",
                isMobile ? "bottom-5" : "top-5",
                className,
                visible ? "opacity-100" : "opacity-0 -translate-y-10"
            )}
        >
            {navItems.map((navItem, idx) => (
                <Tooltip key={`link=${idx}`}>
                    <TooltipTrigger>
                        <Link
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                            to={navItem.link}
                            smooth={true}
                            duration={500}
                        >
                            {isMobile && <span className="block">{navItem.icon}</span>}

                            {!isMobile &&
                                <span className="sm:text-sm">
                                    {navItem.name}
                                </span>
                            }
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        {/* shows tooltip only on mobile */}
                        {
                            isMobile &&
                            <span className="bg-background">
                                {navItem.name}
                            </span>
                        }
                    </TooltipContent>
                </Tooltip>
            ))
            }
        </div >
    );
};


