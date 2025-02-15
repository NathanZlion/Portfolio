'use client';

import { WindowTopBar } from "@/components/application/common-app-components";
import { AppWindowStateInterface } from "@/lib/apps";
import { useAppDispatch } from "@/lib/hooks";
import { closeApplication, minimizeScreen, toggleFullScreen } from "@/lib/state/applications/application_states";
import React from "react";

const EducationApp: React.FC<AppWindowStateInterface> = ({ id: app_id }) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <WindowTopBar
                onClose={() => {
                    dispatch(closeApplication({ id: app_id }))
                }}
                onMinimize={() => {
                    dispatch(minimizeScreen({ id: app_id }))
                }}
                onFullScreenToggle={() => {
                    dispatch(toggleFullScreen({ id: app_id }))
                }} />
        </div>
    )
}

export default EducationApp;