'use client';

// import { useAppDispatch } from "@/lib/hooks";
import { ApplicationState, } from "@/lib/state/applications/application_states";
import { Rnd } from "react-rnd"

/**
 * This widget should be used as a wrapper for any application component.
 * It enforces things like window size, and movement. Also ensures that the window
 * is not rendered outside of the screen, and if it's minimized or closed it will
 * not be rendered.
 */
export default function Window(
    {
        applicationState,
        children
    }: {
        applicationState: Readonly<ApplicationState>,
        children: React.ReactNode;
    }
) {
    // for dispatching change in size and position of the window
    // const dispatch = useAppDispatch();

    return (
        <Rnd default={{
            ...applicationState,
        }}
            className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg border border-black border-opacity-10"
        >
            {children}
        </Rnd>
    );
}

