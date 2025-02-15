'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { WindowTopBar } from "@/components/application/common-components";
import { AppWindowStateInterface } from "@/lib/apps";
import { useAppDispatch } from "@/lib/hooks";
import { closeApplication, minimizeScreen, toggleFullScreen } from "@/lib/state/applications/application_states";
import React from "react";
import { AppSidebar } from "@/components/application/home/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"


const HomeApp: React.FC<AppWindowStateInterface> = ({ id: app_id }) => {
    const dispatch = useAppDispatch();
    return (
        <div className="bg-white bg-opacity-5 h-full">
            <SidebarProvider >
                <AppSidebar />
                <SidebarInset className="bg-opacity-90">
                    <WindowTopBar
                        onClose={() => { dispatch(closeApplication({ id: app_id })) }}
                        onMinimize={() => { dispatch(minimizeScreen({ id: app_id })) }}
                        onFullScreenToggle={() => { dispatch(toggleFullScreen({ id: app_id })) }} />
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                        <div className="flex items-center gap-2 px-3">
                            <SidebarTrigger />
                            <Separator orientation="vertical" className="mr-2 h-4" />

                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

export default HomeApp;