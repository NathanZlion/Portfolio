'use client';

import Dock from "@/components/dock";
import TopNav from "@/components/top-bar";
import Window from "@/components/window";
import { AllApps } from "@/lib/apps";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { registerApplication } from "@/lib/state/applications/application_states";
import { useEffect } from "react";

export default function DesktopLayout() {

    const apps = useAppSelector((state) => state.applicationReducer.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(AllApps).forEach(([id, app]) =>
            dispatch(registerApplication({ id, appState: app.windowState }))
        );
    }, []);

    return (
        <section className="relative h-screen max-h-screen w-full bg-[url('/img/wallpaper.webp')] bg-cover bg-center  overflow-hidden">
            <TopNav />

            <section className="h-full w-full outline outline-green" id="desktop-wrapper">
                {apps.map((app) => {
                    const AppComponent = AllApps[app.id]?.appComponent;
                    if (!AppComponent) return null;

                    return (
                        <Window
                            applicationState={app}
                            key={app.id}
                        >
                            <AppComponent {...app} />
                        </Window>
                    );
                })}
            </section>

            <Dock />
        </section>
    );
}
