import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";


export default function Dock() {

    const items: {
        title: string;
        icon: React.ReactNode;
        href: string;
    }[] = [
            {
                title: "Home",
                icon: (
                    <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "#",
            },

            {
                title: "Products",
                icon: (
                    <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "#",
            },
            {
                title: "Components",
                icon: (
                    <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "#",
            },
            {
                title: "Changelog",
                icon: (
                    <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "#",
            },

            {
                title: "Twitter",
                icon: (
                    <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "#",
            },
            {
                title: "GitHub",
                icon: (
                    <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "#",
            },
        ];
    return (
        <div className="flex flex-col gap-2 items-center justify-center w-full h-fit bottom-6 absolute mb-2 inset-x-0">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={items}
            />
        </div>
    );
}