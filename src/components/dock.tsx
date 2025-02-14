"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FloatingDock } from "./ui/floating-dock";
import { cn } from "@/lib/utils";
import { openApplication } from "@/lib/state/applications/application_states";
import { AllApps } from "@/lib/apps";


export default function Dock() {
    const apps = useAppSelector((state) => state.applicationReducer.apps);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-2 items-end lg:items-center justify-center w-full
            h-fit bottom-6 absolute p-2 inset-x-0">
            <FloatingDock
                items={Object.entries(AllApps).map(([app_id, app]) => ({
                    id: app_id,
                    title: app.title,
                    icon: <AppIcon imageUri={app.icon.uri} alt={app.icon.alt} />,
                    onIconClick: () => dispatch(openApplication({ id: app.id })),
                    open: apps[app.id]?.open,
                }))}
            />
        </div>
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
            width={0}
            height={0}
            className={cn("w-full h-full object-cover p-0 m-0", className)}
        />
    );
};
