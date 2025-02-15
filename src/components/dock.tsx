"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FloatingDock } from "./ui/floating-dock";
import { cn } from "@/lib/utils";
import { openApplication } from "@/lib/state/applications/application_states";
import { AllApps } from "@/lib/apps";
import { motion } from "framer-motion";
import React from "react";

export default function Dock() {
    const dispatch = useAppDispatch();

    const apps = useAppSelector((state) => state.applicationReducer.apps);
    const activeAppId = useAppSelector((state) => state.applicationReducer.activeApp);
    const openAppsExist = Object.values(apps).some((app) => app.open);
    const activeAppIsFullscreen = activeAppId && apps[activeAppId]?.sizingState === "full_screen";
    console.log(activeAppIsFullscreen, activeAppId);

    // Dynamic Y position for animation
    const calculatedY = activeAppIsFullscreen ? 100 : openAppsExist ? 50 : 0;

    return (
        <motion.div
            className={cn("flex flex-col gap-2 items-end lg:items-center justify-center w-full h-fit bottom-6 absolute p-2 inset-x-0 z-50")}
            initial={{ y: 0 }}
            animate={{ y: calculatedY }}
            whileHover={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            <FloatingDock
                items={Object.entries(AllApps).map(([app_id, app]) => ({
                    id: app_id,
                    title: app.title,
                    icon: <AppIcon imageUri={app.icon.uri} alt={app.icon.alt} />,
                    onIconClick: () => dispatch(openApplication({ id: app.id })),
                    open: apps[app.id]?.open,
                }))}
            />
        </motion.div>
    );
}

const AppIcon = ({
    imageUri,
    alt,
    className,
}: {
    imageUri: string;
    alt: string;
    className?: string;
}) => {
    return (
        <img
            src={imageUri}
            alt={alt}
            className={cn("w-full h-full object-cover p-0 m-0", className)}
        />
    );
};
