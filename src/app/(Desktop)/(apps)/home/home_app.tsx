'use client';
import { WindowTopBar } from "@/components/application/common-components";
import { useAppDispatch } from "@/lib/hooks";
import { closeApplication, setSizingStatus, SizingState } from "@/lib/state/applications/application_states";
import React from "react";

export default function HomeApp() {
    const dispatch = useAppDispatch();
    const app_id = "home";

    return (
        <div>
            <WindowTopBar
                onClose={() => {
                    dispatch(closeApplication({ id: app_id }))
                }}
                onMinimize={() => {
                    dispatch(setSizingStatus({ id: app_id, status: SizingState.MINIMIZED }))
                }}
                onMaximize={() => {
                    dispatch(setSizingStatus({ id: app_id, status: SizingState.FULL_SCREEN }))
                }} />
        </div>
    )
}