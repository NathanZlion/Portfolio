'use client';

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { WindowTopBar } from "@/components/application/common-app-components";
import { AppWindowStateInterface } from "@/lib/apps";
import { useAppDispatch } from "@/lib/hooks";
import { closeApplication, minimizeScreen, toggleFullScreen } from "@/lib/state/applications/application_states";
import React from "react";
import { AppSidebar, navData } from "@/components/app-sidebar";
import {
    IconAddressBook,
    IconBriefcase,
    IconCode,
    IconCodeCircle,
    IconDots,
    IconMoodSing,
    IconNotebook,
    IconPlus,
    IconWaveSawTool
} from "@tabler/icons-react";
import { StyledButtonBadge } from "@/components/custom/stylish-badge-button";


const HomeApp: React.FC<
    AppWindowStateInterface & {
        setMouseInDraggableZone?: (val: boolean) => void
    }> = ({ id: app_id, setMouseInDraggableZone }) => {
        const dispatch = useAppDispatch();

        const sidebarData: navData = {
            navMain: {
                groups: [
                    {
                        title: "Home",
                        menuItems: [
                            {
                                title: "About Me",
                                icon: <IconMoodSing />,
                                url: "#",
                            },
                            {
                                title: "Education",
                                icon: <IconNotebook />,
                                url: "#",
                                items: [

                                ]
                            },
                            {
                                title: "Experience",
                                icon: <IconBriefcase />,
                                url: "#",
                            },
                            {
                                title: "Projects",
                                icon: <IconCode />,
                                url: "#",
                            },
                            {
                                title: "Contact Me",
                                icon: <IconAddressBook />,
                                url: "#",
                            },
                        ]
                    },
                ]
            }
        };

        function makeDraggable() {
            console.log("make draggable");
            setMouseInDraggableZone && setMouseInDraggableZone(true);
        }

        function makeUnDraggable() {
            console.log("make undraggable");
            setMouseInDraggableZone && setMouseInDraggableZone(false);
        }

        return (
            <div className="h-full text-white bg-blend-darken backdrop-blur-md  bg-gradient-to-b from-cyan-400/50 from-30% via-orange-400/25 to-orange-900/45 w-full">
                <SidebarProvider className="rounded-xl w-full">
                    <AppSidebar
                        className="backdrop-blur-md bg-black/50"
                        SidebarHeaderItems={
                            <WindowTopBar
                                onClose={() => { dispatch(closeApplication({ id: app_id })) }}
                                onMinimize={() => { dispatch(minimizeScreen({ id: app_id })) }}
                                onFullScreenToggle={() => { dispatch(toggleFullScreen({ id: app_id })) }}
                            // onMouseEnter={() => makeDraggable()}
                            // onMouseLeave={() => makeUnDraggable()}
                            />
                        }
                        data={sidebarData}
                    />
                    <SidebarInset className="bg-opacity-90 w-96">
                        <header
                            className="flex h-10 shrink-0 items-center justify-between gap-2 w-full"
                            onMouseEnter={() => makeDraggable()}
                            onMouseLeave={() => makeUnDraggable()}
                        >
                            <div className="flex items-center gap-2 px-3">
                                My Home
                            </div>
                            <div className="flex items-center gap-2 px-3">
                                <IconWaveSawTool />
                                <IconPlus />
                                <IconDots className="border border-3 rounded-full" />
                            </div>
                        </header>

                        <main className="flex flex-col flex-1 gap-4 p-4 w-full">
                            <ScrollArea className="h-fit w-full whitespace-nowrap rounded-md p-0">
                                <div className="flex w-max space-x-4 py-2">
                                    <StyledButtonBadge icon={<IconCodeCircle />} variant={"secondary"}>
                                        Software Engineer
                                    </StyledButtonBadge>
                                    <StyledButtonBadge icon={<IconCodeCircle />} variant={"secondary"}>
                                        Student
                                    </StyledButtonBadge>
                                    <StyledButtonBadge icon={<IconCodeCircle />} variant={"secondary"}>
                                        Musician
                                    </StyledButtonBadge>
                                </div>
                                <ScrollBar orientation="horizontal" className="h-1" />
                            </ScrollArea>

                            <div className="flex">
                                <div className="flex flex-col">
                                    <div> Hi there,<span role="img" aria-label="hi"> 👋</span> </div>
                                    <div className="text-2xl"> I'm Nathanel Dereje</div>
                                    I'm a software engineer based in Addis Ababa, Ethiopia.
                                </div>
                            </div>
                            <div className="grid auto-rows-min gap-4 md:grid-cols-3 w-full">
                                <div className="aspect-video rounded-xl bg-muted/50" />
                                <div className="aspect-video rounded-xl bg-muted/50" />
                                <div className="aspect-video rounded-xl bg-muted/50" />
                            </div>

                            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min w-full" />
                        </main>

                    </SidebarInset >
                </SidebarProvider >
            </div >
        )
    }

export default HomeApp;