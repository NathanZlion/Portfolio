import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export enum SizingState {
    FULL_SCREEN = "full_screen",
    MINIMIZED = "minimized",
    NORMAL = "normal"
}

export type ApplicationState = {
    id: string;                // Unique ID for each window
    x: number;                 // X position on the screen
    y: number;                 // Y position on the screen
    width: number;             // Window width
    height: number;            // Window height
    sizingState: SizingState;  // Is the window minimized, maximized, or normal?
    zIndex: number;            // Determines which window is on top
    active: boolean;           // Is this window currently active?
    open: boolean;             // Is this window open?
};

export interface AllApplicationsState {
    value: ApplicationState[];
}

const initialState: AllApplicationsState = {
    value: [
        // TODO: Add home page here
        // we could add the home window here, but let's ignore for now
    ],
};

export const WindowSlice = createSlice({
    name: "windows",
    initialState: initialState,
    reducers: {
        addApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            if (state.value.find((window) => window.id === action.payload.id)) {
                // make it active
                state.value = state.value.map((window) => {
                    window.active = window.id === action.payload.id;
                    return window;
                });
            } else {
                state.value.push(
                    {
                        id: action.payload.id,
                        x: 0,
                        y: 0,
                        width: 800,
                        height: 600,
                        sizingState: SizingState.NORMAL,
                        zIndex: state.value.length + 1,
                        active: true,
                        open: true,
                    }
                )
            }
        },
        closeApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            state.value = state.value.filter((window) => window.id !== action.payload.id);
        },
        setActiveApplication: (state: AllApplicationsState, action: PayloadAction<{ id: string }>) => {
            state.value = state.value.map((window) => {
                window.active = window.id === action.payload.id;
                return window;
            });
        },
        setSizingStatus: (state: AllApplicationsState, action: PayloadAction<{
            id: string,
            status: SizingState,
        }>) => {
            state.value = state.value.map((window) => {
                if (window.id === action.payload.id) {
                    window.sizingState = action.payload.status;
                }
                return window;
            });
        },
        setWindowPosition: (
            state: AllApplicationsState,
            action: PayloadAction<{ id: string, x: number, y: number }>
        ) => {
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
    addApplication,
    closeApplication,
    setActiveApplication,
    setSizingStatus,
    setWindowPosition,
    setWindowSize
} = WindowSlice.actions;
export default WindowSlice.reducer;