import { useAppDispatch } from "@/lib/hooks";
import { closeApplication, setSizingStatus, ApplicationState, SizingState } from "@/lib/state/applications/application_states";
import { Rnd } from "react-rnd"
import { Button } from "./ui/button";
import { IconCaretLeftRightFilled, IconMinus, IconX } from "@tabler/icons-react";

export default function Window(
    {
        window,
        children
    }: {
        window: Readonly<ApplicationState>,
        children: React.ReactNode;
    }
) {
    const dispatch = useAppDispatch();

    return (
        <Rnd default={{
            x: 0,
            y: 0,
            width: 320,
            height: 200,
        }}
            className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg border border-black border-opacity-10"
        >
            <div >
                <WindowTopBar
                    onClose={() => { dispatch(closeApplication({ id: window.id })) }}
                    onMinimize={() => { dispatch(setSizingStatus({ id: window.id, status: SizingState.MINIMIZED })) }}
                    onMaximize={() => { dispatch(setSizingStatus({ id: window.id, status: SizingState.FULL_SCREEN })) }}
                />
                {children}
            </div>
        </Rnd>
    );
}


function WindowTopBar(
    {
        onClose,
        onMinimize,
        onMaximize,
    }: {
        onClose: () => void;
        onMinimize: () => void;
        onMaximize: () => void;
    }
) {
    return (
        <div className="container flex flex-row gap-2 items-center justify-start py-1 px-4">
            <Button onClick={onClose} className="rounded-full aspect-square bg-red-500 hover:bg-red-400 p-0 w-6 h-6">
                <IconX className="aspect-square text-black/50 h-6 w-6 rounded-full" />
            </Button>
            <Button onClick={onMinimize} className="rounded-full aspect-square bg-yellow-500 hover:bg-yellow-400 p-0 w-6 h-6">
                <IconMinus className="aspect-square text-black/50 h-6 w-6 rounded-full" />
            </Button>
            <Button onClick={onMaximize} className="-rotate-45 rounded-full aspect-square bg-green-500 hover:bg-green-400 p-0 w-6 h-6">
                <IconCaretLeftRightFilled className="aspect-square text-black/50 h-6 w-6 rounded-full" />
            </Button>
        </div>
    );
}
