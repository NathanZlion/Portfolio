"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState, SizingState } from "./interfaces";


// the sensitivity of how deep into top nav the window should go to be considered full screen
const FULL_SCREEN_THRESHOLD = 10;
export const TOP_NAV_HEIGHT = 40;


export interface AllApplicationsState {
    value: ApplicationState[];
}

const initialState: AllApplicationsState = {
    value: []
};

export const WindowSlice = createSlice({
    name: "windows",
    initialState: initialState,
    reducers: {
        registerApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string, appState: ApplicationState }>) => {
            if (state.value.find((window) => window.id === action.payload.id)) {
                return;
            } else {
                state.value.push(
                    {
                        ...action.payload.appState,
                        id: action.payload.id,
                        x: 0,
                        y: TOP_NAV_HEIGHT,
                        width: 800,
                        height: 600,
                        sizingState: SizingState.NORMAL,
                        zIndex: state.value.length + 1,
                        active: true,
                        open: false,
                    },
                )
            }
        },
        openApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.open = true;
                    window.active = true;
                    if (window.sizingState === SizingState.MINIMIZED) {
                        window.sizingState = SizingState.NORMAL;
                    }
                }
                return window;
            });
        },
        closeApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.sizingState = SizingState.NORMAL;
                    window.open = false;
                    window.active = false;
                }
                return window; // return the window
            });
        },
        setActiveApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            state.value = state.value.map((window) => {
                window.active = window.id === action.payload.id;
                return window;
            });
        },
        minimizeScreen: (state: AllApplicationsState, action: PayloadAction<{
            id: string,
        }>) => {
            state.value = state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.sizingState = SizingState.MINIMIZED;
                }
                return window;
            });
        },
        toggleFullScreen: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            state.value = state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.sizingState = window.sizingState === SizingState.FULL_SCREEN ? SizingState.NORMAL : SizingState.FULL_SCREEN;
                }
                return window;
            });
        },
        setWindowPosition: (
            state: AllApplicationsState,
            action: PayloadAction<{ id: string, x: number, y: number }>
        ) => {
            if (action.payload.y < FULL_SCREEN_THRESHOLD) {
                action.payload.y = TOP_NAV_HEIGHT;
                // make full screen if dragged to the top
                state.value = state.value.map((window) => {
                    if (window.id === action.payload.id) {
                        window.sizingState = SizingState.FULL_SCREEN;
                    }
                    return window;
                });
            }

            state.value = state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.x = action.payload.x;
                    window.y = action.payload.y;
                }
                return window;
            });
        },
        setWindowSize: (
            state: AllApplicationsState,
            action: PayloadAction<{ id: string, width: number, height: number }>
        ) => {
            state.value = state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.width = action.payload.width;
                    window.height = action.payload.height;
                }
                return window;
            });
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