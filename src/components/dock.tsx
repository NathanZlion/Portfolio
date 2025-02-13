import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock, FloatingDockItem } from "./ui/floating-dock";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default function Dock() {

    const items: FloatingDockItem[] = [
        {
            title: "Finder",
            icon: (
                <AppIcon imageUri={"/img/finder.png"} alt={"Finder"} />
            ),
            onClick() { console.log("Finder clicked") },
            open: true
        },
        {
            title: "Home",
            icon: (
                <AppIcon imageUri={"/img/home.png"} alt={"Home"} />
            ),
            onClick() { console.log("Home clicked") },
            open: true
        },
        {
            title: "Education",
            icon: (
                <AppIcon imageUri={"/img/minecraft_education.png"} alt={"Education"} />
            ),
            onClick() { console.log("Education clicked") },
            open: true
        },
        {
            title: "Experience",
            icon: (
                <AppIcon imageUri={"/img/slack.png"} alt={"Experience"} />
            ),
            onClick() { console.log("Experience clicked") },
            open: false
        },
        {
            title: "Projects",
            icon: (
                <AppIcon imageUri={"/img/xcode.png"} alt={"Projects"} />
            ),
            onClick() { console.log("Projects clicked") },
            open: false
        },
        {
            title: "Contact Me",
            icon: (
                <AppIcon imageUri={"/img/contacts.png"} alt={"Contact"} />
            ),
            onClick() { console.log("Contacts clicked") },
            open: false
        },
        {
            title: "My Hobbies",
            icon: (
                <AppIcon imageUri={"/img/music.png"} alt={"Hobbies"} />
            ),
            onClick() { console.log("Hobbies clicked") },
            open: false
        },
        {
            title: "Resume",
            icon: (
                <AppIcon imageUri={"/img/minecraft_education.png"} alt={"Resume"} />
            ),
            onClick() { console.log("Home clicked") },
            open: false
        },
        {
            title: "Github Profile",
            icon: (
                <AppIcon imageUri={"/img/github_desktop.png"} alt={"Github"} />
            ),
            onClick() { console.log("Github clicked") },
            open: false
        },
        {
            title: "My Blog",
            icon: (
                <AppIcon imageUri={"/img/journal.png"} alt={"Blog"} />
            ),
            onClick() { console.log("Home clicked") },
            open: true
        },
        {
            title: "Terminal | Easter egg",
            icon: (
                <AppIcon imageUri={"/img/terminal.png"} alt={"Terminal easter egg app"} />
            ),
            onClick() { console.log("Home clicked") },
            open: true
        },
    ];
    return (
        <div className="flex flex-col gap-2 items-end lg:items-center justify-center w-full h-fit bottom-6 absolute p-2 inset-x-0">
            <FloatingDock items={items} />
        </div>
    );
}

const AppIcon = ({
    imageUri,
    alt,
    className,
}: {
    imageUri: string;
    alt: string;
    className?: string;
}) => {
    return (
        <img
            src={imageUri}
            alt={alt}
            width={0}
            height={0}
            className={cn("w-full h-full object-cover p-0 m-0", className)}
        />
        // don't let image overflow just cover it's containter
    );
}