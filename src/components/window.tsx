'use client';

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TOP_NAV_HEIGHT, setWindowPosition, setWindowSize } from "@/lib/state/applications/application_states";
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import { ApplicationState } from "@/lib/state/applications/interfaces";

export default function Window({
    applicationState,
    children,
    className,
}: {
    applicationState: Readonly<ApplicationState>;
    children: React.ReactNode;
    className?: string;
}) {
    const dispatch = useAppDispatch();

    // Track browser window size for full screen mode
    const [winSize, setWinSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const appState = useAppSelector((state) => state.applicationReducer.apps[applicationState.id]);
    if (!appState) {
        return null;
    }

    const { id, x, y, width, height, sizingState, open, zIndex } = appState;

    useEffect(() => {
        const handleResize = () => {
            setWinSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let rndPosition = { x, y };
    let rndSize = { width, height };

    if (sizingState === "full_screen") {
        rndPosition = { x: 0, y: TOP_NAV_HEIGHT };
        rndSize = { width: winSize.width, height: winSize.height - TOP_NAV_HEIGHT };
    }

    return (
        (!open || sizingState === "minimized") ?
            <></> :
            <Rnd
                position={rndPosition}
                size={rndSize}
                maxWidth={winSize.width}
                maxHeight={winSize.height}
                minWidth={200}
                minHeight={100}
                bounds="parent"
                style={{ zIndex }}
                disableDragging={sizingState === "full_screen"}
                enableResizing={sizingState !== "full_screen"}
                onDragStop={(_e, d) => {
                    dispatch(setWindowPosition({ id, x: d.x, y: d.y }));
                }}
                onResizeStop={(_e, _direction, ref, _delta, position) => {
                    dispatch(setWindowSize({ id, width: parseInt(ref.style.width, 10), height: parseInt(ref.style.height, 10) }));
                    dispatch(setWindowPosition({ id, x: position.x, y: position.y }));
                }}
                className={cn(
                    "bg-white bg-opacity-75 backdrop-blur-md shadow-lg border border-opacity-10 border-none border-red-600",
                    sizingState === "full_screen" ? "rounded-none" : "rounded-lg",
                    className
                )}
            >
                {children}
            </Rnd>
    );
}
