import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"


export type navData = {
    navMain: {
        groups: {
            title?: string;
            menuItems: {
                title: string;
                hide?: boolean;
                onClick?: () => void;
                url: string;
                icon?: JSX.Element;
                isActive?: boolean;
                items?: {
                    title: string;
                    onClick?: () => void;
                    icon?: JSX.Element;
                    url: string;
                    isActive?: boolean;
                }[];
            }[]
        }[],
    };
}


export type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
    className?: string,
    data: navData,
    SidebarHeaderItems?: JSX.Element,
    SidebarContentItems?: React.ReactNode,
    SidebarFooterItems?: React.ReactNode,
};

export function AppSidebar({
    className, SidebarHeaderItems, data, SidebarFooterItems, SidebarContentItems, ...props }: AppSidebarProps) {
    return (
        <Sidebar {...props} className={cn("flex flex-col h-full rounded-l-2xl", className)}>
            <SidebarHeader>
                <SidebarMenu >
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            {SidebarHeaderItems}
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="rounded-l-2xl">
                {data?.navMain.groups.map((group, index) => (
                    <SidebarGroup title={group.title} key={`sidebar_${group.title}_${index}`}>
                        <SidebarMenu>
                            {group.menuItems.map((mainItem, index) => (
                                <SidebarMenuItem key={cn(`sidebar_menu_item_${group.title}_${mainItem.title}_${index}`)}>
                                    {
                                        !mainItem.hide &&
                                        <SidebarMenuButton asChild isActive={mainItem.isActive}>
                                            <div className="flex">
                                                {mainItem.icon}
                                                <a href={mainItem.url} className="font-medium">
                                                    {mainItem.title}
                                                </a>
                                            </div>
                                        </SidebarMenuButton>
                                    }
                                    {mainItem.items?.length ? (
                                        <SidebarMenuSub>
                                            {mainItem.items.map((subItem, index) => (
                                                <SidebarMenuSubItem
                                                    key={`sidebar_menu_item_${group.title}_${mainItem.title}_${subItem.title}_${index}`}
                                                >
                                                    <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                                                        <div className="flex">
                                                            {subItem.icon}
                                                            <a href={subItem.url}>{subItem.title}</a>
                                                        </div>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    ) : null}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    )
}
