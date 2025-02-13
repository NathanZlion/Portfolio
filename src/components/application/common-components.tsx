import { IconCaretLeftRightFilled, IconMinus, IconX } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";


export const WindowTopBar = React.forwardRef<
    HTMLDivElement, {
        onClose: () => void;
        onMinimize: () => void;
        onMaximize: () => void;
    }>(
        function WindowTopBar({ onClose, onMinimize, onMaximize }, ref) {
            return (
                <div className="container flex flex-row gap-2 items-center justify-start py-1 px-4">
                    <CloseButton onClick={onClose} />
                    <MinimizeButton onClick={onMinimize} />
                    <MaximizeButton onClick={onMaximize} />
                </div>
            );
        }
    );

export const CloseButton = React.forwardRef<HTMLButtonElement, { onClick: () => void }>(
    function CloseButton({ onClick }, ref) {
        return (
            <Button
                ref={ref}
                onClick={onClick}
                className="rounded-full aspect-square bg-red-500 hover:bg-red-400 p-0 w-6 h-6"
            >
                <IconX className="aspect-square text-black/50 h-6 w-6 rounded-full" />
            </Button>
        );
    }
);

export const MinimizeButton = React.forwardRef<HTMLButtonElement, { onClick: () => void }>(
    function MinimizeButton({ onClick }, ref) {
        return (
            <Button
                ref={ref}
                onClick={onClick}
                className="rounded-full aspect-square bg-yellow-500 hover:bg-yellow-400 p-0 w-6 h-6"
            >
                <IconMinus className="aspect-square text-black/50 h-6 w-6 rounded-full" />
            </Button>
        );
    }
);


export const MaximizeButton = React.forwardRef<HTMLButtonElement, { onClick: () => void }>(
    function MaximizeButton({ onClick }, ref) {
        return (
            <Button
                ref={ref}
                onClick={onClick}
                className="-rotate-45 rounded-full aspect-square bg-green-500 hover:bg-green-400 p-0 w-6 h-6"
            >
                <IconCaretLeftRightFilled className="aspect-square text-black/50 h-6 w-6 rounded-full" />
            </Button>
        );
    }
);
