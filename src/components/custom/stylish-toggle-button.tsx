import { cn } from "@/lib/utils";
import { Toggle } from "../ui/toggle";

export const ButtonToggleStylish = ({
    title,
    onPressed,
    active,
    leading,
}: {
    title: string;
    onPressed: (pressed: boolean) => void;
    active: boolean;
    leading?: React.ReactNode;
}) => {
    return (
        <Toggle pressed={active} onPressedChange={onPressed} title={title} className="border-none w-full"
            onClick={(event) => event.stopPropagation()}
        >
            <div className="flex items-center p-0 container">
                <span className={cn("p-1 rounded-full", active ? "bg-accent-foreground/20" : "bg-accent")}>
                    {leading}
                </span>
                <p>{title}</p>
            </div>
        </Toggle >
    );
};