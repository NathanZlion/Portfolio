'use client';

import Dock from "@/components/dock";
import TopNav from "@/components/top-bar";
import Window from "@/components/window";
import { AllApps } from "@/lib/apps";
import { useAppSelector } from "@/lib/hooks";

export default function DesktopLayout() {
    const apps = useAppSelector((state) => state.applicationReducer.value);

    return (
        <div className="relative h-screen max-h-screen w-full bg-[url('/img/wallpaper.webp')] bg-cover bg-center">
            <TopNav />

            <section className="h-full w-full">
                {apps.map((app) => {
                    const AppComponent = AllApps[app.id]?.appComponent;

                    // Handle cases where appComponent might be undefined
                    if (!AppComponent) return null;

                    return (
                        <Window applicationState={app} key={app.id}>
                            <AppComponent />
                        </Window>
                    );
                })}
            </section>

            <Dock />
        </div>
    );
}
