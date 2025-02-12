'use client';

import {
    IconServer, IconBrandAppleFilled,
    IconBrightness, IconMoon2, IconDeviceMobile
} from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Calendar } from "@/components/ui/calendar";
// import { useTheme } from "next-themes";
import { Toggle } from "@radix-ui/react-toggle";
import { cn } from "@/lib/utils";

export default function TopNav() {
    // const { theme, setTheme } = useTheme();
    const [theme, setTheme] = useState<boolean>(true);
    const [showNotch, setShowNotch] = useState(true);
    const toggleTheme = () => {
        setTheme(!theme);
    }

    // const toggleTheme = () => {
    //     setTheme(theme === "dark" ? "light" : "dark");
    // };

    const toggleNotch = () => {
        setShowNotch(!showNotch);
    };

    const [time, setTime] = useState(
        new Date().toLocaleTimeString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        })
    );

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };

        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-10 bg-black/40 backdrop-blur-md text-white text-sm flex items-center justify-between px-2">
            {/* Left - Apple Logo & Menu */}
            <div className="flex items-center gap-4">
                <IconBrandAppleFilled className="text-lg" />
                <nav className="flex gap-3 font-medium">
                    <span className="cursor-pointer hover:opacity-80">Nathnael Dereje</span>
                </nav>
            </div>

            {/* Center - Notch */}
            {showNotch && <Notch />}

            {/* Right - Controls & Time */}
            <Menubar className="relative rounded-full border border-transparent shadow-md flex justify-center space-x-4 py-2 bg-transparent backdrop-blur-sm">
                <MenubarMenu>
                    <MenubarTrigger> {<IconServer />} </MenubarTrigger>
                    <MenubarContent>
                        <div className="p-4 grid grid-cols-1 gap-4">
                            <div className="text-sm grid grid-cols-2 gap-4">
                                <MenubarItem className="w-full">
                                    <ToggleMenuItem
                                        title={"Dark Mode"}
                                        onPressed={toggleTheme}
                                        active={theme}
                                        leading={<IconBrightness />}
                                    />
                                </MenubarItem>
                                <MenubarItem>
                                    <ToggleMenuItem
                                        title={"Animations"}
                                        onPressed={() => { }}
                                        active={theme}
                                        leading={<IconMoon2 />}
                                    />
                                </MenubarItem>
                            </div>
                            <div className="text-sm grid grid-cols-1">
                                <MenubarItem className="w-full">
                                    <ToggleMenuItem
                                        title={"Notch"}
                                        onPressed={toggleNotch}
                                        active={showNotch}
                                        leading={<IconDeviceMobile />}
                                    />
                                </MenubarItem>
                            </div>
                        </div>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger> {<span>{time}</span>} </MenubarTrigger>
                    <MenubarContent>
                        <div className="p-4 grid grid-cols-1 gap-4">
                            <MenubarItem>
                                <Calendar
                                    mode="single"
                                    selected={new Date()}
                                    onSelect={(_) => { }}
                                    onDayClick={(_, __, event) => {
                                        event.stopPropagation();
                                    }}
                                    onWeekNumberClick={(_, __, event) => {
                                        event.stopPropagation();
                                    }}
                                    className="rounded-md border"
                                />
                            </MenubarItem>
                        </div>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
}

export const ToggleMenuItem = ({
    title,
    onPressed,
    active,
    leading,
}: {
    title: string;
    onPressed: (pressed: boolean) => void;
    active: boolean;
    leading?: React.ReactNode;
}) => {
    return (
        <Toggle pressed={active} onPressedChange={onPressed} title={title} className="p-4 border-none w-full"
            onClick={(event) => event.stopPropagation()}
        >
            <div className="flex items-center space-x-2">
                <span className={cn("p-1 rounded-full", active ? "bg-accent-foreground/20" : "bg-accent")}>
                    {leading}
                </span>
                <p className="text-black dark:text-white">{title}</p>
            </div>
        </Toggle >
    );
};

const Notch = () => {
    return (
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-black/50 w-32 h-10 rounded-b-xl shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-10 bg-black/80 rounded-b-2xl shadow-[0_4px_10px_rgba(0,0,0,0.3)] backdrop-blur-md flex items-center justify-center">
                <span role="img" aria-label="Notch" >
                </span>
            </div>
        </div>
    );
};
