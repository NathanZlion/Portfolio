'use client';

import Dock from "@/components/dock";
import TopNav from "@/components/top-bar";
import Window from "@/components/window";
import { useAppSelector } from "@/lib/hooks";

export default function DesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const apps = useAppSelector((state) => state.applicationReducer.value);

    return (
        <div className="relative h-screen max-h-screen w-full bg-[url('/img/wallpaper.webp')] bg-cover bg-center">
            <TopNav />

            <section className="h-full w-full">
                {apps.map((app) => {
                    return (
                        <Window window={app} key={app.id}>
                            {children}
                        </Window>
                    );
                })}
            </section>
            <Dock />
        </div>
    );
}
