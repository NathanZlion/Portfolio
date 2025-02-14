
// export enum SizingState {
//     FULL_SCREEN = "full_screen",
//     MINIMIZED = "minimized",
//     NORMAL = "normal"
// }

export type SizingState = "full_screen" | "minimized" | "normal";

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