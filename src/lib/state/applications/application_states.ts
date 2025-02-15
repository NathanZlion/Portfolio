"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "./interfaces";


// the sensitivity of how deep into top nav the window should go to be considered full screen
const FULL_SCREEN_THRESHOLD = 10;
export const TOP_NAV_HEIGHT = 40;


export interface AllApplicationsState {
    apps: {
        [key: string]: ApplicationState;
    },
    activeApp: string | null;
}

const initialState: AllApplicationsState = {
    apps: {},
    activeApp: "home",
};

export const WindowSlice = createSlice({
    name: "windows",
    initialState: initialState,
    reducers: {
        registerApplication: (
            state: AllApplicationsState,
            action: PayloadAction<{
                id: string,
                appState: ApplicationState
            }>) => {
            console.log("registering app", action.payload.id);

            if (state.apps[action.payload.id]) {
                console.log(`App with id ${action.payload.id} already exists`);
                return;
            }

            state.apps[action.payload.id] = { ...action.payload.appState };
        },
        openApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            const appId = action.payload.id;
            console.log("opening app", appId);

            state.apps[appId].open = true;
            state.apps[appId].active = true;
            if (state.apps[appId].sizingState === "minimized") {
                state.apps[appId].sizingState = "normal";
            }

            state.activeApp = action.payload.id;
        },
        closeApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            const appId = action.payload.id;
            console.log("closing app", appId);

            state.apps[appId] = {
                ...state.apps[action.payload.id],
                open: false,
                active: false,
                sizingState: "normal"
            }

            if (state.activeApp === appId) {
                state.activeApp = null;
            }
        },
        setActiveApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            const appId = action.payload.id;

            // Handle closed check
            console.log("setting active app", appId);
            state.activeApp = appId;
        },
        minimizeScreen: (state: AllApplicationsState, action: PayloadAction<{
            id: string,
        }>) => {
            const appId = action.payload.id;
            console.log("minimizing app", appId);

            state.apps[appId].sizingState = "minimized"
        },
        toggleFullScreen: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            const appId = action.payload.id;
            if (state.apps[appId].sizingState == "minimized") {
                return;
            } else if (state.apps[appId].sizingState == "full_screen") {
                state.apps[appId].sizingState = "normal";
            } else {
                state.apps[appId].sizingState = "full_screen";
            }
        },
        setWindowPosition: (
            state: AllApplicationsState,
            action: PayloadAction<{ id: string, x: number, y: number }>
        ) => {
            const appId = action.payload.id;
            console.log("setting window position", appId);

            // snap to top
            if (action.payload.y < FULL_SCREEN_THRESHOLD) {
                state.apps[appId].sizingState = "full_screen";
            }

            if (action.payload.y < TOP_NAV_HEIGHT) {
                action.payload.y = TOP_NAV_HEIGHT;
            }

            state.apps[appId].x = action.payload.x;
            state.apps[appId].y = action.payload.y;
        },
        setWindowSize: (
            state: AllApplicationsState,
            action: PayloadAction<{ id: string, width: number, height: number }>
        ) => {
            const appId = action.payload.id;
            console.log("setting window size", appId);
            state.apps[appId].width = action.payload.width;
            state.apps[appId].height = action.payload.height;
        },
    },
});

export const {
    registerApplication,
    openApplication,
    closeApplication,
    setActiveApplication,
    minimizeScreen,
    setWindowPosition,
    setWindowSize,
    toggleFullScreen,
} = WindowSlice.actions;
export default WindowSlice.reducer;