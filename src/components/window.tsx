'use client';

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { TOP_NAV_HEIGHT, setWindowPosition, setWindowSize } from "@/lib/state/applications/application_states";
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import { ApplicationState, SizingState } from "@/lib/state/applications/interfaces";

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
    const { id, x, y, width, height, sizingState, open, zIndex } = applicationState;

    // Track browser window size for full screen mode
    const [winSize, setWinSize] = useState({ width: window.innerWidth, height: window.innerHeight });



    useEffect(() => {
        const handleResize = () => {
            setWinSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let rndPosition = { x, y };
    let rndSize = { width, height };

    if (sizingState === SizingState.FULL_SCREEN) {
        rndPosition = { x: 0, y: TOP_NAV_HEIGHT };
        rndSize = { width: winSize.width, height: winSize.height - TOP_NAV_HEIGHT };
    }

    if (!open || sizingState === SizingState.MINIMIZED) return null;

    return (
        <Rnd
            position={rndPosition}
            size={rndSize}
            maxWidth={winSize.width}
            maxHeight={winSize.height}
            minWidth={200}
            minHeight={100}
            bounds="parent"
            style={{ zIndex }}
            disableDragging={sizingState === SizingState.FULL_SCREEN}
            enableResizing={sizingState !== SizingState.FULL_SCREEN}
            onDragStop={(_e, d) => {
                dispatch(setWindowPosition({ id, x: d.x, y: d.y }));
            }}
            onResizeStop={(_e, _direction, ref, _delta, position) => {
                dispatch(setWindowSize({ id, width: parseInt(ref.style.width, 10), height: parseInt(ref.style.height, 10) }));
                dispatch(setWindowPosition({ id, x: position.x, y: position.y }));
            }}
            className={cn(
                "bg-white bg-opacity-10 backdrop-blur-md shadow-lg border border-black border-opacity-10 p-2 border-none",
                sizingState === SizingState.FULL_SCREEN ? "rounded-none" : "rounded-lg",
                className
            )}
        >
            {applicationState.id}
            {children}
        </Rnd>
    );
}
