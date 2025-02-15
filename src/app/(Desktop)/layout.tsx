'use client';

import Dock from "@/components/dock";
import TopNav from "@/components/top-bar";
import Window from "@/components/window";
import { AllApps } from "@/lib/apps";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { registerApplication } from "@/lib/state/applications/application_states";
import { useEffect } from "react";

export default function DesktopLayout() {

    const apps = useAppSelector((state) => state.applicationReducer.apps);
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(AllApps).forEach(([id, app]) => {
            dispatch(registerApplication({ id, appState: { ...app.windowState } }));
        });
    }, []);

    useEffect(() => {
        console.log(`${new Date().toLocaleTimeString()} UPDATED !!!`);
    }, [apps]);

    return (
        <section className="relative h-screen max-h-screen w-full bg-[url('/img/wallpaper.webp')] bg-cover bg-center overflow-y-hidden">
            <TopNav />

            <section className="h-full w-full" id="desktop-wrapper">
                {Object.entries(apps).map(
                    ([id, appState]) => {
                        const AppComponent = AllApps[id]?.appComponent;
                        if (!AppComponent) return null;

                        return (
                            <Window applicationState={appState} key={id} >
                                <AppComponent {...appState} />
                            </Window>
                        );
                    }
                )}
            </section>

            <Dock />
        </section>
    );
}
